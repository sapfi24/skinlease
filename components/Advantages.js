const advantages = [
  {
    number: "01",
    title: "Без залога",
    text: "Для аренды не нужно оставлять дополнительную сумму в качестве залога.",
  },
  {
    number: "02",
    title: "Выгодные цены",
    text: "Получаете готовый инвентарь на нужный срок без покупки его полной стоимости.",
  },
  {
    number: "03",
    title: "Готовые сеты",
    text: "Каждый сет уже собран в едином стиле. Вы просто выбираете понравившийся.",
  },
  {
    number: "04",
    title: "Поддержка",
    text: "Оформление и связь происходят напрямую через Telegram.",
  },
];

export default function Advantages() {
  return (
    <section
      id="advantages"
      className="section"
    >
      <div className="container">

        <div className="section-header">
          <div>
            <div className="section-kicker">
              ПОЧЕМУ SKINLEASE
            </div>

            <h2>
              Всё, что нужно
              <br />
              для простой аренды.
            </h2>
          </div>

          <p>
            Никаких сложных схем.
            Выбираете сет, связываетесь с нами
            и получаете готовый инвентарь.
          </p>
        </div>

        <div className="advantages-grid">

          {advantages.map((item) => (
            <article
              className="advantage-card"
              key={item.number}
            >
              <div className="advantage-number">
                {item.number}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span className="advantage-arrow">
                →
              </span>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
