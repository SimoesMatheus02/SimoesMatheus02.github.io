interface CertificateProps {
  title: string
  description: string
  image: string
  pdfUrl: string
  alt: string
}

export function Certificate({ title, description, image, pdfUrl, alt }: CertificateProps) {
  return (
    <div className="p-6 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-500">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
      <div className="mt-4 border border-gray-300 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-auto"
        />
      </div>
      <div className="flex gap-4 justify-center mt-4">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline font-medium"
        >
          Visualizar PDF
        </a>
      </div>
    </div>
  )
}
