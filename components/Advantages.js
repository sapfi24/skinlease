const advantages = [
  {
    number: "01",
    title: "Без залога",
    text: "Для аренды не нужно оставлять дополнительную сумму в качестве залога.",
  },
  {
    number: "02",
    title: "Выгодные цены",
    text: "Мы считаем, что дорогие скины должны быть доступны каждому игроку, поэтому предлагаем аренду по выгодным ценам.",
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
  {
    number: "05",
    title: "Никаких посредников",
    text: "Все скины и аккаунты находятся в личном владении. Никакой субаренды и всех вытекающих из неё проблем.",
  },
  {
    number: "06",
    title: "Простая оплата",
    text: "Оплата происходит удобным для вас способом.",
  },
  {
    number: "07",
    title: "Скидки и уникальные предложения",
    text: "Будучи постоянным клиентом, вас ожидают более приятные цены и условия аренды.",
  },
  {
    number: "08",
    title: "Реальные отзывы",
    text: "Отзывы на сайте дублируются с основных площадок - Телеграм и Авито.",
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
              для простой аренды
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
