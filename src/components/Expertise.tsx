import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"
import { HighlightedText } from "./HighlightedText"

const partnerBenefits = [
  {
    title: "Оптовые цены от 1 рулона",
    description: "Никаких минимальных объёмов — оптовая цена с первого метра. Скидки до 25% при регулярных закупках и накопительная система лояльности для постоянных партнёров.",
    icon: "Tag",
  },
  {
    title: "Образцы бесплатно",
    description:
      "Отправляем коллекционные образцы тканей бесплатно для дизайнеров и салонов. Поможем подобрать ткань под проект клиента — просто опишите задачу.",
    icon: "Package",
  },
  {
    title: "Кэшбэк для дизайнеров",
    description:
      "Специальная программа для дизайнеров интерьера: кэшбэк 7% от каждой закупки, персональный менеджер и приоритетная обработка заказов.",
    icon: "Percent",
  },
  {
    title: "Гарантия наличия и сроков",
    description:
      "Фиксируем цену на 30 дней после согласования. Гарантируем доставку в оговорённые сроки или возвращаем деньги. Ваша репутация — наша ответственность.",
    icon: "ShieldCheck",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">B2B партнёрам</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Условия</HighlightedText> для
            <br />
            вашего бизнеса
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Мы создаём партнёрские условия, которые помогают вашему бизнесу расти. Работаем с салонами штор, ателье, дизайнерами и закупщиками отелей и ЖК.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {partnerBenefits.map((benefit, index) => {
            return (
              <div
                key={benefit.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l-2 transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  borderColor: "#C9A961",
                }}
              >
                <div className="mb-4">
                  <Icon name={benefit.icon as "Tag"} size={40} className="text-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
