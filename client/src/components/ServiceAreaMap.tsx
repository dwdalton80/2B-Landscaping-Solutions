interface ServiceAreaMapProps {
  title?: string;
  description?: string;
}

export default function ServiceAreaMap({
  title = "Our Service Area",
  description = "2B Landscaping proudly serves Bryan, Atoka, Carter, and Grayson Counties in Oklahoma",
}: ServiceAreaMapProps) {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[#2d5f4f] mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <iframe
        title="2B Landscaping service area map"
        className="w-full h-96 rounded-lg shadow-lg border border-gray-200"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Durant,+OK&z=9&output=embed"
      />
      <div className="mt-6 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#2d5f4f] mb-3">Service Coverage</h3>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Bryan County (Primary Service Area)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Atoka County</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Carter County</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Grayson County</span>
          </li>
        </ul>
        <p className="text-sm text-gray-600 mt-4">
          <strong>Service Area:</strong> We proudly serve all four counties with full landscaping services including lawn care, design, hardscaping, and irrigation. Contact us for availability on projects outside these areas.
        </p>
      </div>
    </div>
  );
}
