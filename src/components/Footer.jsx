export default function Footer() {
  const footerColumns = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Case Studies", "Reviews"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Press"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Support", "API", "Community"]
    }
  ]

  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-4">
              IMS
            </h3>
            <p className="text-gray-400">
              Revolutionizing internship management for modern businesses
            </p>
          </div>
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}