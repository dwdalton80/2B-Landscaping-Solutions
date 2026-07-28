import { useState } from "react";
import { X, Phone, Mail, MapPin } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    try {
      // Send to Formspree
      const response = await fetch("https://formspree.io/f/mdaqbkrp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
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
      } else {
        toast.error("Failed to send request. Please try again or call us.");
      }
    } catch (error) {
      toast.error("Failed to send request. Please try again or call us.");
      console.error("Error sending request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Quick Request</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Request Sent!
              </h3>
              <p className="text-gray-600 mb-4">
                We'll get back to you within 24 hours.
              </p>
              <p className="text-sm text-gray-500">
                Or call us:{" "}
                <a
                  href="tel:5809162686"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  (580) 916-2686
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(580) 000-0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your project..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 rounded-lg transition-colors"
              >
                {isLoading ? "Sending..." : "Send Request"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                We typically respond within 24 hours.
              </p>
            </form>
          )}
        </div>

        {/* Footer with contact info */}
        <div className="bg-gray-50 border-t border-gray-200 p-6">
          <p className="text-xs text-gray-600 font-semibold mb-3">
            Or contact us directly:
          </p>
          <div className="space-y-2 text-sm">
            <a
              href="tel:5809162686"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (580) 916-2686
            </a>
            <a
              href="mailto:2b.landscaping@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              2b.landscaping@gmail.com
            </a>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-4 h-4" />
              Durant, OK 74701
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
