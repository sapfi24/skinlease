
export const metadata = {
  title: "Итоги розыгрыша SkinLease",
  description:
    "Итоги розыгрыша SkinLease: победители и призы за три призовых места.",
};

// Главный приз
const GIVEAWAY_PRIZE = {
  name: "★ Нож выживания | Вороненая сталь",
  image: "/giveaway/prize.png",
  steamPrice: "6250 ₽",
};

// Итоги розыгрыша
const GIVEAWAY_RESULTS = [
  {
    place: "1 МЕСТО",
    winner: "adddiction_",
    prize: GIVEAWAY_PRIZE.name,
    className: "giveaway-result-first",
  },
  {
    place: "2 МЕСТО",
    winner: "Pinch",
    prize: "AWP | Черный Нил",
    className: "giveaway-result-second",
  },
  {
    place: "3 МЕСТО",
    winner: "neverdodo 🍕",
    prize: "StatTrak™ Desert Eagle | Стрелковая дисциплина",
    className: "giveaway-result-third",
  },
];

export default function GiveawayPage() {
  return (
    <main className="giveaway-page giveaway-page-completed">
      <div className="container">
        {/* ЗАВЕРШЁННЫЙ РОЗЫГРЫШ */}
        <section className="giveaway-hero">
          <div className="giveaway-hero-content">
            <span className="giveaway-eyebrow">
              SKINLEASE COMMUNITY
            </span>

            <h1>
              Розыгрыш завершён
              <br />
              <span>Итоги опубликованы</span>
            </h1>

            <p>
              Спасибо всем участникам! Поздравляем победителей
              розыгрыша SkinLease и благодарим каждого за участие.
            </p>

            <div className="giveaway-hero-stats">
              <div>
                <strong>3</strong>
                <span>Победителя</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Призовых места</span>
              </div>

              <div>
                <strong>ИТОГИ</strong>
                <span>Розыгрыш завершён</span>
              </div>
            </div>
          </div>

          {/* ДЕКОРАТИВНЫЕ БИЛЕТЫ */}
          <div
            className="giveaway-ticket-visual"
            aria-hidden="true"
          >
            <div className="giveaway-ticket-glow" />

            <div className="giveaway-ticket giveaway-ticket-back giveaway-ticket-back-left">
              <div className="giveaway-ticket-brand">
                <span className="giveaway-ticket-mark">S</span>
                SKINLEASE
              </div>

              <div className="giveaway-ticket-line" />

              <div className="giveaway-ticket-bottom">
                <span>COMMUNITY</span>
                <strong>1 БИЛЕТ</strong>
              </div>
            </div>

            <div className="giveaway-ticket giveaway-ticket-back giveaway-ticket-back-right">
              <div className="giveaway-ticket-brand">
                <span className="giveaway-ticket-mark">S</span>
                SKINLEASE
              </div>

              <div className="giveaway-ticket-line" />

              <div className="giveaway-ticket-bottom">
                <span>LUCKY DRAW</span>
                <strong>ТВОЙ ШАНС</strong>
              </div>
            </div>

            <div className="giveaway-ticket giveaway-ticket-main">
              <div className="giveaway-ticket-top">
                <div className="giveaway-ticket-brand">
                  <span className="giveaway-ticket-mark">S</span>
                  SKINLEASE
                </div>

                <span className="giveaway-ticket-edition">
                  GIVEAWAY
                </span>
              </div>

              <div className="giveaway-ticket-center">
                <span>ИТОГИ РОЗЫГРЫША</span>
                <strong>END</strong>
                <div className="giveaway-ticket-accent-line" />
                <p>СПАСИБО ЗА УЧАСТИЕ</p>
              </div>

              <div className="giveaway-ticket-cut">
                <span />
              </div>

              <div className="giveaway-ticket-bottom">
                <span>SKINLEASE COMMUNITY</span>
                <strong>ПОЗДРАВЛЯЕМ ПОБЕДИТЕЛЕЙ</strong>
              </div>

              <div className="giveaway-ticket-floating-badge">
                <span className="giveaway-ticket-badge-dot" />
                <span>ИТОГИ ПОДВЕДЕНЫ</span>
              </div>
            </div>
          </div>
        </section>

        {/* ГЛАВНЫЙ ПРИЗ — 1 МЕСТО */}
        <section className="giveaway-prize-card">
          <div className="giveaway-prize-info">
            <span className="giveaway-eyebrow">
              ПРИЗ ЗА 1 МЕСТО
            </span>

            <h2>{GIVEAWAY_PRIZE.name}</h2>

            <p>
              Главный приз розыгрыша достаётся победителю
              первого места — <strong>adddiction_</strong>
            </p>

            <div className="giveaway-prize-price">
              <span>СТОИМОСТЬ ПО STEAM</span>
              <strong>{GIVEAWAY_PRIZE.steamPrice}</strong>
            </div>
          </div>

          <div className="giveaway-prize-visual">
            <img
              src={GIVEAWAY_PRIZE.image}
              alt={GIVEAWAY_PRIZE.name}
            />
          </div>
        </section>

        {/* ИТОГИ И ПОБЕДИТЕЛИ */}
        <section
          className="giveaway-results"
          aria-labelledby="giveaway-results-title"
        >
          <div className="giveaway-results-intro">
            <span className="giveaway-eyebrow">
              РОЗЫГРЫШ ЗАВЕРШЁН
            </span>

            <h2 id="giveaway-results-title">
              Итоги розыгрыша
            </h2>

            <p>
              Все призовые места определены. Поздравляем
              победителей!
            </p>
          </div>

          <div className="giveaway-results-grid">
            {GIVEAWAY_RESULTS.map((result) => (
              <article
                className={`giveaway-result-card ${result.className}`}
                key={result.place}
              >
                <div className="giveaway-result-card-top">
                  <span className="giveaway-result-place">
                    {result.place}
                  </span>

                  <span
                    className="giveaway-result-medal"
                    aria-hidden="true"
                  >
                    {result.place.startsWith("1")
                      ? "♛"
                      : result.place.startsWith("2")
                        ? "Ⅱ"
                        : "Ⅲ"}
                  </span>
                </div>

                <span className="giveaway-result-caption">
                  ПОБЕДИТЕЛЬ
                </span>

                <h3 className="giveaway-result-winner">
                  {result.winner}
                </h3>

                <div className="giveaway-result-divider" />

                <span className="giveaway-result-caption">
                  ПРИЗ
                </span>

                <p className="giveaway-result-prize">
                  {result.prize}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ИНФОРМАЦИЯ О РОЗЫГРЫШЕ */}
        <section className="giveaway-rules">
          <div className="giveaway-rules-intro">
            <span className="giveaway-eyebrow">
              ПРОСТО И ПРОЗРАЧНО
            </span>

            <h2>Условия розыгрыша</h2>

            <p>
              Ниже собраны основные условия, по которым
              проходил розыгрыш.
            </p>
          </div>

          <div className="giveaway-rules-grid">
            <article className="giveaway-rule">
              <span className="giveaway-rule-number">
                01
              </span>

              <h3>Аренда сетов</h3>

              <p>
                Участники оформляли аренду сетов через SkinLease.
              </p>
            </article>

            <article className="giveaway-rule">
              <span className="giveaway-rule-number">
                02
              </span>

              <h3>Получение билетов</h3>

              <p>
                Количество билетов зависело от суммы аренды
                и условий конкурса.
              </p>
            </article>

            <article className="giveaway-rule">
              <span className="giveaway-rule-number">
                03
              </span>

              <h3>Шансы на победу</h3>

              <p>
                Чем больше билетов было у участника, тем выше
                была его доля на колесе.
              </p>
            </article>

            <article className="giveaway-rule">
              <span className="giveaway-rule-number">
                04
              </span>

              <h3>Подведение итогов</h3>

              <p>
                Розыгрыш завершён, победители и призы указаны выше.
              </p>
            </article>
          </div>
        </section>

        {/* ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ */}
        <section className="giveaway-terms">
          <details className="giveaway-terms-details">
            <summary className="giveaway-terms-summary">
              <span
                className="giveaway-terms-icon"
                aria-hidden="true"
              >
                i
              </span>

              <span className="giveaway-terms-heading">
                <span className="giveaway-eyebrow">
                  ДЕТАЛИ РОЗЫГРЫША
                </span>

                <strong>Важные условия розыгрыша</strong>
              </span>

              <span
                className="giveaway-terms-toggle"
                aria-hidden="true"
              >
                +
              </span>
            </summary>

            <div className="giveaway-terms-content">
              <article className="giveaway-term">
                <span className="giveaway-term-number">
                  01
                </span>

                <div>
                  <h3>Билеты за аренду</h3>

                  <p>
                    При аренде с отменой со стороны SkinLease
                    участник один раз получает билеты на текущий
                    конкурс в зависимости от суммы аренды:
                    например, 5 000 ₽ = 5 билетов. При последующих
                    арендах с отменой со стороны SkinLease билеты
                    повторно не начисляются. Дополнительные билеты
                    можно получить только при аренде с отменой
                    со стороны клиента. Покупатели с FanPay не
                    участвуют в розыгрыше. Участвуют заказы через
                    Avito, Telegram и сайт.
                  </p>
                </div>
              </article>

              <article className="giveaway-term">
                <span className="giveaway-term-number">
                  02
                </span>

                <div>
                  <h3>Получение приза</h3>

                  <p>
                    Приз может быть выдан в виде скина CS2 или
                    в денежном эквиваленте переводом на карту
                    российского банка. Формат получения приза
                    заранее уточняется у организатора.
                  </p>
                </div>
              </article>

              <article className="giveaway-term">
                <span className="giveaway-term-number">
                  03
                </span>

                <div>
                  <h3>Приз за счёт SkinLease</h3>

                  <p>
                    Приз оплачивается из прибыли SkinLease.
                    Расходы на розыгрыш не перекладываются на
                    участников посредством повышения цен на аренду.
                  </p>
                </div>
              </article>
            </div>
          </details>
        </section>
      </div>
    </main>
  );
}
