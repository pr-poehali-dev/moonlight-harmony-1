import { useState } from "react"
import { ArrowRight, Loader2, CheckCircle } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const SEND_LEAD_URL = "https://functions.poehali.dev/58bfff2b-7903-4d61-94f4-23af1ce4a579"

export function CallToAction() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return
    setStatus("loading")
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", phone: "", comment: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Начать сотрудничество</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Получите прайс и
            <br />
            образцы <HighlightedText>бесплатно</HighlightedText>
          </h2>

          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Оставьте заявку — пришлём актуальный прайс, подберём образцы под ваши задачи и согласуем условия за один рабочий день.
          </p>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <CheckCircle className="w-12 h-12" style={{ color: "#C9A961" }} />
              <p className="text-xl font-medium">Заявка отправлена!</p>
              <p className="text-primary-foreground/60">Мы свяжемся с вами в течение одного рабочего дня.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm underline underline-offset-4 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50 transition-colors text-sm"
                />
                <input
                  type="tel"
                  placeholder="Телефон *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50 transition-colors text-sm"
                />
              </div>
              <textarea
                placeholder="Что вас интересует? (необязательно)"
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                rows={3}
                className="w-full px-5 py-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50 transition-colors text-sm resize-none"
              />
              {status === "error" && (
                <p className="text-red-400 text-sm">Что-то пошло не так. Позвоните нам: +7 (495) 123-45-67</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-wide transition-colors duration-300 group disabled:opacity-60"
                style={{ backgroundColor: "#C9A961", color: "#fff" }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    Получить прайс бесплатно
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
              <p className="text-primary-foreground/40 text-xs">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </form>
          )}

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            {[
              { value: "1 200+", label: "артикулов в наличии" },
              { value: "500+", label: "партнёров по РФ" },
              { value: "12 лет", label: "на рынке" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: "#C9A961" }}>{stat.value}</div>
                <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
