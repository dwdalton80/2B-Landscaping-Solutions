import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";
import { sendEmail, formatContactEmailHtml } from "./_core/email";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    sendEstimate: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().optional(),
          service: z.string().optional(),
          message: z.string().min(10, "Message must be at least 10 characters"),
        })
      )
      .mutation(async ({ input }) => {
        // Send notification to owner with estimate request details
        const serviceLabel = input.service || "Not specified";
        const content = `
**New Estimate Request from 2B Landscaping Website**

**Name:** ${input.name}
**Email:** ${input.email}
**Phone:** ${input.phone || "Not provided"}
**Service:** ${serviceLabel}
**Message:** ${input.message}

Reply to: ${input.email}
        `.trim();

        try {
          // Send notification to platform owner
          await notifyOwner({
            title: "New Estimate Request",
            content,
          });

          // Send email directly to business email
          const emailSent = await sendEmail({
            to: "2b.landscaping@gmail.com",
            subject: `New Estimate Request from ${input.name}`,
            html: formatContactEmailHtml({
              name: input.name,
              email: input.email,
              phone: input.phone,
              service: input.service,
              message: input.message,
            }),
          });

          if (!emailSent) {
            console.warn("Email notification failed, but form was submitted");
          }

          return { success: true };
        } catch (error) {
          console.error("Failed to send notification:", error);
          throw new Error("Failed to send estimate request");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
