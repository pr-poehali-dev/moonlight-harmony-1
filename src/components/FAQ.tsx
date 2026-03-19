import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Какой минимальный заказ для оптовой покупки?",
    answer:
      "У нас нет строгого минимального объёма — оптовую цену вы получаете с первого рулона (обычно 25–50 метров). Чем больше объём, тем выше скидка. Уточните у менеджера актуальную шкалу цен.",
  },
  {
    question: "Есть ли возможность получить образцы тканей?",
    answer:
      "Да, мы отправляем образцы бесплатно для дизайнеров и салонов штор. Заполните форму на сайте или позвоните нам — отправим образцы нужных коллекций почтой или курьером по Москве.",
  },
  {
    question: "Как работает программа кэшбэка для дизайнеров?",
    answer:
      "Зарегистрируйтесь как партнёр-дизайнер и получайте 7% кэшбэка от каждой закупки на бонусный счёт. Бонусы можно использовать для следующих заказов. Плюс — персональный менеджер и приоритетная отгрузка.",
  },
  {
    question: "Какие условия оплаты и возможна ли отсрочка?",
    answer:
      "Для новых клиентов — предоплата 100%. Постоянным партнёрам после 3-го заказа предоставляем отсрочку платежа до 30 дней. Принимаем оплату по счёту (юрлица и ИП) и безналичный расчёт.",
  },
  {
    question: "Как быстро осуществляется доставка?",
    answer:
      "По Москве и МО — доставка собственной службой за 1–2 рабочих дня. В регионы — транспортными компаниями (СДЭК, ПЭК, Деловые Линии) за 2–5 рабочих дней. Крупные партии — от 3 рабочих дней.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Заполните форму «Стать партнёром» или позвоните нам. Мы вышлем актуальный прайс, подберём образцы под ваши задачи и согласуем условия. Первый заказ оформим за один рабочий день.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  style={{ color: openIndex === index ? "#C9A961" : undefined }}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
