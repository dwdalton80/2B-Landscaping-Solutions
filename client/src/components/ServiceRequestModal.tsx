import React, { useState } from "react";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export default function ServiceRequestModal({
  isOpen,
  onClose,
  selectedService = "",
}: ServiceRequestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: selectedService,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const sendEstimate = trpc.contact.sendEstimate.useMutation();

  const services = [
    "Lawn Care",
    "Landscape Design",
    "Retaining Walls",
    "Patios & Hardscapes",
    "Sprinkler Installation",
    "Walkways",
    "Irrigation",
    "Sod Installation",
    "Masonry",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await sendEstimate.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      });

      setSubmitted(true);
      toast.success("Service request sent! We'll contact you soon.");

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: selectedService,
          message: "",
        });
        onClose();
      }, 2000);
    } catch (error) {
      toast.error("Failed to send request. Please try again or call us.");
      console.error("Error sending request:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Quick Service Request</h2>
          <button
            onClick={onClose}
            className="hover:bg-amber-800 p-1 rounded transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600">
                We've received your request and will contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                  placeholder="(580) 123-4567"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Needed *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={sendEstimate.isPending}
                className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {sendEstimate.isPending ? "Sending..." : "Send Request"}
              </button>

              {/* Contact Info */}
              <div className="border-t pt-4 mt-4">
                <p className="text-xs text-gray-600 mb-3 font-semibold">
                  Or contact us directly:
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:(580)916-2686"
                    className="flex items-center gap-2 text-sm text-amber-700 hover:text-amber-800 transition-colors"
                  >
                    <Phone size={16} />
                    (580) 916-2686
                  </a>
                  <a
                    href="mailto:info@2blandscapingsolutions.com"
                    className="flex items-center gap-2 text-sm text-amber-700 hover:text-amber-800 transition-colors"
                  >
                    <Mail size={16} />
                    info@2blandscapingsolutions.com
                  </a>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    Durant, OK & Surrounding Areas
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
