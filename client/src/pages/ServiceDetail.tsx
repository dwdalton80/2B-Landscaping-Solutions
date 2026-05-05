import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ServicePageConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  process: string[];
  features: string[];
  cta: string;
  relatedServices: string[];
}

const servicePages: Record<string, ServicePageConfig> = {
  "lawn-care": {
    id: "lawn-care",
    title: "Professional Lawn Care Services in Durant, OK",
    subtitle: "Expert Lawn Maintenance & Care",
    description:
      "2B Landscaping provides comprehensive lawn care services to keep your outdoor space looking pristine year-round. From regular maintenance to specialized treatments, we ensure your lawn stays healthy and beautiful.",
    benefits: [
      "Regular mowing and edging for a polished appearance",
      "Fertilization programs tailored to your soil type",
      "Weed control and pest management",
      "Aeration and overseeding for dense, healthy grass",
      "Seasonal cleanup and debris removal",
      "Irrigation system maintenance and repair",
    ],
    process: [
      "Initial lawn assessment and soil analysis",
      "Custom care plan development",
      "Regular maintenance schedule implementation",
      "Seasonal adjustments based on weather",
      "Ongoing monitoring and optimization",
    ],
    features: [
      "Licensed and insured professionals",
      "Eco-friendly treatments available",
      "Flexible scheduling options",
      "Transparent pricing",
      "15+ years of experience",
    ],
    cta: "Schedule Your Lawn Care Consultation",
    relatedServices: ["landscape-design", "irrigation-installation"],
  },
  "landscape-design": {
    id: "landscape-design",
    title: "Custom Landscape Design in Durant, Oklahoma",
    subtitle: "Transform Your Outdoor Space",
    description:
      "Our expert landscape designers create stunning outdoor environments that reflect your style and enhance your property value. We combine creativity with functionality to design landscapes that you'll love for years to come.",
    benefits: [
      "Custom design tailored to your vision and budget",
      "Professional plant selection for your climate",
      "Hardscape design including patios and walkways",
      "Water feature integration",
      "Outdoor lighting design",
      "Sustainable and low-maintenance options",
    ],
    process: [
      "Consultation and site assessment",
      "Concept sketches and design options",
      "3D visualization of final design",
      "Material and plant selection",
      "Professional installation",
      "Maintenance recommendations",
    ],
    features: [
      "Award-winning design team",
      "CAD design software for visualization",
      "Sustainable design practices",
      "Custom hardscape options",
      "Seasonal color planning",
    ],
    cta: "Get Your Free Design Consultation",
    relatedServices: ["retaining-walls", "fountain-installation"],
  },
  "retaining-walls": {
    id: "retaining-walls",
    title: "Professional Retaining Wall Installation in Durant, OK",
    subtitle: "Durable & Beautiful Hardscape Solutions",
    description:
      "2B Landscaping specializes in designing and building retaining walls that are both functional and aesthetically pleasing. Our expert craftsmanship ensures your walls will stand the test of time.",
    benefits: [
      "Erosion control and soil stabilization",
      "Increased usable outdoor space",
      "Enhanced property aesthetics",
      "Improved drainage management",
      "Increased property value",
      "Durable construction materials",
    ],
    process: [
      "Site evaluation and measurement",
      "Design consultation and material selection",
      "Proper foundation and drainage preparation",
      "Expert construction and installation",
      "Finishing touches and landscaping",
      "Maintenance guidance",
    ],
    features: [
      "Multiple material options (stone, brick, timber)",
      "Structural engineering expertise",
      "Drainage system installation",
      "Competitive pricing",
      "Warranty on workmanship",
    ],
    cta: "Request a Retaining Wall Quote",
    relatedServices: ["landscape-design", "patios-hardscapes"],
  },
  "patios-hardscapes": {
    id: "patios-hardscapes",
    title: "Custom Patio & Hardscape Design in Durant, Oklahoma",
    subtitle: "Create Your Perfect Outdoor Living Area",
    description:
      "Transform your backyard into an outdoor oasis with our custom patio and hardscape designs. We create beautiful, functional spaces perfect for entertaining and relaxing.",
    benefits: [
      "Expanded outdoor living space",
      "Multiple design style options",
      "Durable, long-lasting materials",
      "Enhanced property value",
      "Low-maintenance solutions",
      "Perfect for entertaining",
    ],
    process: [
      "Initial consultation and site assessment",
      "Design options and material selection",
      "Detailed project planning",
      "Professional installation",
      "Finishing details and landscaping",
      "Care and maintenance instructions",
    ],
    features: [
      "Permeable paving options",
      "Multiple material choices",
      "Integrated lighting options",
      "Fire pit and seating areas",
      "Professional installation",
    ],
    cta: "Design Your Dream Patio Today",
    relatedServices: ["landscape-design", "fountain-installation"],
  },
  "irrigation-installation": {
    id: "irrigation-installation",
    title: "Professional Irrigation System Installation in Durant, OK",
    subtitle: "Efficient Watering Solutions for Your Landscape",
    description:
      "Keep your landscape healthy and vibrant with our professional irrigation system installation and maintenance. We design systems that deliver water efficiently while saving you time and money.",
    benefits: [
      "Automated watering schedules",
      "Water conservation and efficiency",
      "Healthier plants and grass",
      "Time-saving automation",
      "Reduced water bills",
      "Smart controller options",
    ],
    process: [
      "Landscape assessment and water needs analysis",
      "System design and layout planning",
      "Equipment selection and installation",
      "System testing and calibration",
      "User training and documentation",
      "Seasonal maintenance scheduling",
    ],
    features: [
      "Smart irrigation controllers",
      "Drip irrigation options",
      "Sprinkler system design",
      "Seasonal adjustments",
      "Maintenance and repair services",
    ],
    cta: "Schedule Your Irrigation Consultation",
    relatedServices: ["lawn-care", "landscape-design"],
  },
  "fountain-installation": {
    id: "fountain-installation",
    title: "Custom Fountain Installation in Durant, Oklahoma",
    subtitle: "Add Water Features to Your Landscape",
    description:
      "Enhance your outdoor space with a beautiful custom fountain. Our expert team designs and installs stunning water features that add elegance and tranquility to any landscape.",
    benefits: [
      "Creates focal point in landscape",
      "Adds soothing water sounds",
      "Improves air quality",
      "Attracts wildlife and birds",
      "Increases property value",
      "Unique aesthetic appeal",
    ],
    process: [
      "Design consultation and concept development",
      "Location and size selection",
      "Material and style selection",
      "Professional installation",
      "Plumbing and electrical setup",
      "Maintenance training",
    ],
    features: [
      "Custom design options",
      "Multiple material choices",
      "Integrated lighting available",
      "Pump and filtration systems",
      "Maintenance and repair services",
    ],
    cta: "Get Your Fountain Design Quote",
    relatedServices: ["landscape-design", "patios-hardscapes"],
  },
  "pond-scrapes": {
    id: "pond-scrapes",
    title: "Professional Pond Scaping in Durant, OK",
    subtitle: "Create Beautiful Water Features",
    description:
      "Transform your property with a custom pond or water garden. Our expert pond design and installation services create stunning water features that enhance your landscape's natural beauty.",
    benefits: [
      "Creates natural focal point",
      "Supports aquatic ecosystem",
      "Increases property value",
      "Provides wildlife habitat",
      "Adds tranquility and ambiance",
      "Low-maintenance water features",
    ],
    process: [
      "Site assessment and design consultation",
      "Pond size and depth planning",
      "Liner and filtration system selection",
      "Professional excavation and installation",
      "Plant and fish selection",
      "Ongoing maintenance guidance",
    ],
    features: [
      "Custom pond design",
      "Filtration system installation",
      "Aquatic plant selection",
      "Koi pond options",
      "Maintenance and cleaning services",
    ],
    cta: "Design Your Custom Pond Today",
    relatedServices: ["landscape-design", "fountain-installation"],
  },
  "artificial-turf": {
    id: "artificial-turf",
    title: "Professional Artificial Turf Installation in Durant, Oklahoma",
    subtitle: "Low-Maintenance Lawn Solutions",
    description:
      "Enjoy a beautiful, green lawn year-round with minimal maintenance. Our premium artificial turf installation provides a natural-looking, durable solution for any landscape.",
    benefits: [
      "Year-round green appearance",
      "No mowing or watering required",
      "Reduced maintenance costs",
      "Durable and long-lasting",
      "Pet and child-friendly",
      "Environmentally conscious option",
    ],
    process: [
      "Site preparation and assessment",
      "Turf selection and customization",
      "Professional installation",
      "Proper drainage setup",
      "Finishing and edging",
      "Care instructions provided",
    ],
    features: [
      "Premium quality turf",
      "Natural appearance",
      "Drainage systems",
      "UV-resistant materials",
      "10+ year warranty options",
    ],
    cta: "Get Your Artificial Turf Quote",
    relatedServices: ["landscape-design", "lawn-care"],
  },
  "walkways": {
    id: "walkways",
    title: "Professional Walkway & Path Installation in Durant, OK",
    subtitle: "Elegant Stone & Paver Pathways",
    description:
      "Create beautiful, functional walkways and paths that guide visitors through your property with style and safety. Our expert craftsmen design and install custom stone and paver pathways.",
    benefits: [
      "Enhanced property curb appeal",
      "Safe, durable pathways",
      "Multiple material options",
      "Custom design possibilities",
      "Improved property navigation",
      "Increased property value",
    ],
    process: [
      "Site assessment and design consultation",
      "Material selection and planning",
      "Ground preparation and leveling",
      "Professional installation",
      "Finishing touches and edging",
      "Maintenance recommendations",
    ],
    features: [
      "Stone and paver options",
      "Custom design layouts",
      "Proper drainage installation",
      "Professional craftsmanship",
      "Long-lasting materials",
    ],
    cta: "Design Your Custom Walkway",
    relatedServices: ["landscape-design", "patios-hardscapes"],
  },
  "sod-installation": {
    id: "sod-installation",
    title: "Professional Sod Installation in Durant, Oklahoma",
    subtitle: "Instant Lush, Green Lawns",
    description:
      "Transform your property with fresh sod installation. We prepare the soil and professionally lay premium sod for an instant, lush green lawn that establishes quickly.",
    benefits: [
      "Instant green lawn appearance",
      "Quick establishment",
      "Premium quality sod",
      "Professional soil preparation",
      "Proper watering guidance",
      "Erosion prevention",
    ],
    process: [
      "Site assessment and soil testing",
      "Soil preparation and grading",
      "Sod selection and delivery",
      "Professional sod installation",
      "Proper seaming and rolling",
      "Initial watering and care instructions",
    ],
    features: [
      "Premium quality sod",
      "Proper soil preparation",
      "Professional installation",
      "Warranty on sod",
      "Establishment care guidance",
    ],
    cta: "Get Your Sod Installation Quote",
    relatedServices: ["lawn-care", "landscape-design"],
  },
  "masonry": {
    id: "masonry",
    title: "Professional Masonry Services in Durant, OK",
    subtitle: "Stone Walls, Features & Structural Elements",
    description:
      "Expert masonry work including stone walls, decorative features, and structural elements. Our skilled craftsmen create beautiful, durable masonry that enhances your property.",
    benefits: [
      "Durable stone construction",
      "Custom design options",
      "Structural integrity",
      "Enhanced property aesthetics",
      "Increased property value",
      "Long-lasting materials",
    ],
    process: [
      "Design consultation and planning",
      "Material selection",
      "Foundation and base preparation",
      "Professional masonry installation",
      "Finishing and sealing",
      "Quality inspection",
    ],
    features: [
      "Stone and brick options",
      "Custom design work",
      "Skilled craftsmen",
      "Structural expertise",
      "Warranty on workmanship",
    ],
    cta: "Discuss Your Masonry Project",
    relatedServices: ["landscape-design", "patios-hardscapes"],
  },
  "christmas-lights": {
    id: "christmas-lights",
    title: "Professional Christmas Light Installation in Durant, OK",
    subtitle: "Transform Your Home Into a Festive Masterpiece",
    description:
      "Professional holiday lighting design and installation to transform your home into a festive masterpiece. We use beautiful, energy-efficient LED lights for stunning results.",
    benefits: [
      "Professional design and installation",
      "Energy-efficient LED lights",
      "Custom lighting designs",
      "Safe installation practices",
      "Holiday ambiance and curb appeal",
      "Hassle-free setup and removal",
    ],
    process: [
      "Consultation and design planning",
      "Light selection and customization",
      "Professional installation",
      "Testing and adjustments",
      "Seasonal maintenance",
      "Professional removal after holidays",
    ],
    features: [
      "Energy-efficient LED lights",
      "Custom design options",
      "Professional installation",
      "Safe electrical work",
      "Seasonal storage available",
    ],
    cta: "Get Your Christmas Lighting Quote",
    relatedServices: ["landscape-design"],
  },
};

export function ServiceDetail() {
  const [location, navigate] = useLocation();
  const serviceId = location.split("/services/")[1];
  const service = servicePages[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground py-12">
        <div className="container max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-6">The service you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2d5f4f] to-[#1a3a2e] text-white py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-gray-100">{service.subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl py-12">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <Card key={idx} className="p-4">
                <p className="text-gray-800">{benefit}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Process</h2>
          <div className="space-y-4">
            {service.process.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#d4a574] text-white rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <p className="text-gray-800 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="text-[#d4a574] text-xl">✓</div>
                <p className="text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f5e6d3] rounded-lg p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-[#2d5f4f] mb-4">{service.cta}</h3>
          <p className="text-gray-700 mb-6">
            Contact 2B Landscaping today for a free consultation and quote.
          </p>
          <Button 
            onClick={() => navigate("/#contact")}
            className="bg-[#d4a574] hover:bg-[#c49560] text-white px-8 py-3 text-lg"
          >
            Request a Quote
          </Button>
        </section>

        {/* Related Services */}
        {service.relatedServices.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {service.relatedServices.map((relatedId) => {
                const relatedService = servicePages[relatedId];
                return (
                  <Card
                    key={relatedId}
                    className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => navigate(`/services/${relatedId}`)}
                  >
                    <h3 className="font-bold text-lg mb-2">{relatedService.subtitle}</h3>
                    <p className="text-sm text-gray-600 mb-4">{relatedService.description.substring(0, 80)}...</p>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Card>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
