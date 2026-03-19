import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const products = [
  {
    id: 1,
    title: "Жаккард «Версаль»",
    category: "Портьерные ткани",
    location: "от 890 ₽/мп · В наличии",
    year: "Хит",
    image: "https://cdn.poehali.dev/projects/812e46a0-f3fe-4b25-844a-8c8adadc8f79/files/338a3bb9-7ebe-4995-b3b8-0c35ca252738.jpg",
  },
  {
    id: 2,
    title: "Блэкаут Premium",
    category: "Светозащитные ткани",
    location: "от 650 ₽/мп · В наличии",
    year: "Топ",
    image: "https://cdn.poehali.dev/projects/812e46a0-f3fe-4b25-844a-8c8adadc8f79/files/81a7d1c1-e493-4c74-a033-6de59215d393.jpg",
  },
  {
    id: 3,
    title: "Лён натуральный",
    category: "Натуральные ткани",
    location: "от 1 200 ₽/мп · В наличии",
    year: "Новинка",
    image: "https://cdn.poehali.dev/projects/812e46a0-f3fe-4b25-844a-8c8adadc8f79/files/ff63f2b0-c8fa-4c93-8107-f9e121b66302.jpg",
  },
  {
    id: 4,
    title: "Бархат «Милан»",
    category: "Премиум коллекция",
    location: "от 1 450 ₽/мп · Под заказ",
    year: "Премиум",
    image: "https://cdn.poehali.dev/projects/812e46a0-f3fe-4b25-844a-8c8adadc8f79/files/a4582089-6a5a-4d43-b7e9-01714d372ab2.jpg",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(products[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Популярные позиции</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Каталог тканей</h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Запросить полный прайс
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === product.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(product.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
                <span
                  className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 z-10"
                  style={{ backgroundColor: "#C9A961", color: "#fff" }}
                >
                  {product.year}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{product.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {product.category} · {product.location}
                  </p>
                </div>
                <button
                  className="text-xs px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex-shrink-0"
                >
                  Запросить цену
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}