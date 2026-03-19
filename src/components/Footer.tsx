export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <span style={{ color: "#1E3A5F" }}>Ткань</span>
                <span style={{ color: "#C9A961" }}>ОптПро</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Оптовые поставки портьерных тканей для салонов штор, дизайнеров, ателье и закупщиков. Москва, доставка по всей России.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Навигация</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Каталог тканей
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Партнёрам
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:opt@tkanoptpro.ru" className="hover:text-foreground transition-colors">
                  opt@tkanoptpro.ru
                </a>
              </li>
              <li>
                <a href="tel:+74951234567" className="hover:text-foreground transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="text-muted-foreground">Москва, ул. Текстильщиков, 12</li>
              <li>
                <a href="https://wa.me/74951234567" className="hover:text-foreground transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://t.me/tkanoptpro" className="hover:text-foreground transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 ТканьОптПро. Все права защищены.</p>
          <p>ИНН 7700000000 · ОГРН 1000000000000</p>
        </div>
      </div>
    </footer>
  )
}
