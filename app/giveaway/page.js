import participants from "../../data/giveaway";
import GiveawayWheel from "../../components/GiveawayWheel";

export const metadata = {
  title: "Розыгрыш SkinLease",
  description:
    "Получайте билеты за аренду сетов CS2 и участвуйте в розыгрышах SkinLease.",
};

// Единая палитра для колеса и списка участников
const PARTICIPANT_COLORS = [
  "#8D75F0",
  "#36B9B0",
  "#E6A54A",
  "#E5688E",
  "#5AA8E8",
  "#B5CF68",
  "#B77CE8",
  "#E27C56",
];

function getParticipantColor(index) {
  return PARTICIPANT_COLORS[
    index % PARTICIPANT_COLORS.length
  ];
}

// Данные главного приза
const GIVEAWAY_PRIZE = {
  name: "★ Нож выживания | Вороненая сталь",
  image: "/giveaway/prize.png",
  steamPrice: "6250 ₽",
};

const GIVEAWAY_TICKET_GOAL = 15;
const GIVEAWAY_LIVE_DATE = "29 октября 2026, 12:00 МСК";

export default function GiveawayPage() {
  const validParticipants = participants.filter(
    (person) =>
      person.name &&
      Number.isInteger(Number(person.tickets)) &&
      Number(person.tickets) > 0
  );

  const totalTickets = validParticipants.reduce(
    (sum, person) => sum + Number(person.tickets),
    0
  );

  const goalReached = totalTickets >= GIVEAWAY_TICKET_GOAL;

  const ticketProgress = Math.min(
    (totalTickets / GIVEAWAY_TICKET_GOAL) * 100,
    100
  );

  const ticketsRemaining = Math.max(
    GIVEAWAY_TICKET_GOAL - totalTickets,
    0
  );

  return (
    <main className="giveaway-page">
      <div className="container">

        {/* ГЛАВНЫЙ БЛОК */}
        {/* ГЛАВНЫЙ БЛОК */}
<section className="giveaway-hero">
  <div className="giveaway-hero-content">
    <span className="giveaway-eyebrow">
      SKINLEASE COMMUNITY
    </span>

    <h1>
      Арендуй сеты
      <br />
      <span>Участвуй в розыгрыше</span>
    </h1>

    <p>
      Каждая тысяча рублей, потраченная на аренду
      SkinLease, даёт билет в розыгрыш. Чем больше
      билетов, тем выше твой шанс на победу.
    </p>

    <div className="giveaway-hero-stats">
      <div>
        <strong>{validParticipants.length}</strong>
        <span>Участников</span>
      </div>

      <div>
        <strong>{totalTickets}</strong>
        <span>Билетов в розыгрыше</span>
      </div>

      <div>
        <strong>1 000 ₽</strong>
        <span>За один билет</span>
      </div>
    </div>
  </div>

  {/* ДЕКОРАТИВНАЯ КОМПОЗИЦИЯ БИЛЕТОВ */}
  {/* ДЕКОРАТИВНАЯ КОМПОЗИЦИЯ БИЛЕТОВ */}
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

  {/* ЦЕНТРАЛЬНЫЙ БИЛЕТ */}
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
      <span>ТВОЙ БИЛЕТ</span>
      <strong>001</strong>
      <div className="giveaway-ticket-accent-line" />
      <p>КАЖДЫЙ БИЛЕТ — ШАНС НА ПОБЕДУ</p>
    </div>

    <div className="giveaway-ticket-cut">
      <span />
    </div>

    <div className="giveaway-ticket-bottom">
      <span>SKINLEASE COMMUNITY</span>
      <strong>УЧАСТВУЙ И ПОБЕЖДАЙ</strong>
    </div>

    {/* БЕЙДЖ ТЕПЕРЬ ВНУТРИ БИЛЕТА */}
    <div className="giveaway-ticket-floating-badge">
      <span className="giveaway-ticket-badge-dot" />
      <span>БОЛЬШЕ БИЛЕТОВ — ВЫШЕ ШАНС</span>
    </div>
  </div>
</div>

</section>

        {/* ГЛАВНЫЙ ПРИЗ */}
        <section className="giveaway-prize-card">
          <div className="giveaway-prize-info">
            <span className="giveaway-eyebrow">
              ГЛАВНЫЙ ПРИЗ
            </span>

            <h2>{GIVEAWAY_PRIZE.name}</h2>

            <p>
              Участвуй в розыгрыше SkinLease
              и получи шанс забрать этот приз.
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

        {/* КОЛЕСО И УЧАСТНИКИ */}
        <section className="giveaway-main-grid">

          <GiveawayWheel
            participants={validParticipants}
            colors={PARTICIPANT_COLORS}
          />

          <div className="giveaway-participants-card">

            <div className="giveaway-section-heading">
              <div>
                <span className="giveaway-eyebrow">
                  СПИСОК УЧАСТНИКОВ
                </span>

                <h2>Кто участвует</h2>
              </div>

              <span className="giveaway-count">
                {validParticipants.length}
              </span>
            </div>

            {validParticipants.length > 0 ? (
              <div className="giveaway-participants-list">
                {validParticipants.map((person, index) => {
                  const tickets = Number(person.tickets);

                  const percentage =
                    (tickets / totalTickets) * 100;

                  const color = getParticipantColor(index);

                  return (
                    <div
                      className="giveaway-participant"
                      key={person.id}
                    >
                      <span
                        className="giveaway-participant-dot"
                        style={{
                          backgroundColor: color,
                        }}
                      />

                      <div className="giveaway-participant-main">

                        <div className="giveaway-participant-top">
                          <strong>{person.name}</strong>

                          <span>
                            {percentage.toLocaleString("ru-RU", {
                              maximumFractionDigits: 1,
                            })}
                            %
                          </span>
                        </div>

                        <div className="giveaway-progress">
                          <div
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: color,
                            }}
                          />
                        </div>

                        <span className="giveaway-ticket-count">
                          {tickets}{" "}
                          {tickets === 1
                            ? "билет"
                            : tickets >= 2 && tickets <= 4
                              ? "билета"
                              : "билетов"}
                        </span>

                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="giveaway-empty">
                <span className="giveaway-empty-icon">
                  ◎
                </span>

                <h3>Пока нет участников</h3>

                <p>
                  Список появится здесь после добавления
                  участников и их билетов организатором.
                </p>
              </div>
            )}

            <div className="giveaway-participants-note">
              Доля каждого участника зависит от количества
              его билетов относительно общего числа билетов.
            </div>

            {/* СЧЁТЧИК БИЛЕТОВ */}
            <div
              className={`giveaway-ticket-gate ${
                goalReached ? "is-ready" : ""
              }`}
            >
              {goalReached ? (
                <>
                  <span className="giveaway-gate-label">
                    <span className="giveaway-gate-dot" />
                    ЦЕЛЬ ДОСТИГНУТА
                  </span>

                  <h3>Прямой эфир розыгрыша</h3>

                  <strong className="giveaway-live-date">
                    {GIVEAWAY_LIVE_DATE}
                  </strong>

                  <p>
                    Все билеты собраны. Следите за объявлением
                    даты и времени проведения розыгрыша.
                  </p>
                </>
              ) : (
                <>
                  <div className="giveaway-gate-header">
                    <div>
                      <span className="giveaway-gate-label">
                        ДО СТАРТА РОЗЫГРЫША
                      </span>

                      <h3>Собираем билеты</h3>
                    </div>

                    <div className="giveaway-ticket-counter">
                      <strong>{totalTickets}</strong>
                      <span>/ {GIVEAWAY_TICKET_GOAL}</span>
                    </div>
                  </div>

                  <div
                    className="giveaway-ticket-track"
                    role="progressbar"
                    aria-label="Прогресс набора билетов"
                    aria-valuemin={0}
                    aria-valuemax={GIVEAWAY_TICKET_GOAL}
                    aria-valuenow={Math.min(
                      totalTickets,
                      GIVEAWAY_TICKET_GOAL
                    )}
                  >
                    <div
                      className="giveaway-ticket-fill"
                      style={{
                        width: `${ticketProgress}%`,
                      }}
                    />
                  </div>

                  <div className="giveaway-ticket-footer">
                    <span>
                      {ticketsRemaining === 1
                        ? "Остался 1 билет"
                        : `Осталось ${ticketsRemaining} билетов`}
                    </span>

                    <span>
                      {Math.round(ticketProgress)}%
                    </span>
                  </div>

                  <p>
                    Когда наберётся {GIVEAWAY_TICKET_GOAL} билетов,
                    здесь появятся дата и время прямого эфира.
                  </p>
                </>
              )}
            </div>

          </div>
        </section>

        {/* ПРАВИЛА РОЗЫГРЫША */}
        <section className="giveaway-rules">

          <div className="giveaway-rules-intro">
            <span className="giveaway-eyebrow">
              ПРОСТО И ПРОЗРАЧНО
            </span>

            <h2>Правила участия</h2>

            <p>
              Чем активнее пользуешься SkinLease, тем больше
              билетов можешь получить.
            </p>
          </div>

          <div className="giveaway-rules-grid">

            <article className="giveaway-rule">
              <span className="giveaway-rule-number">
                01
              </span>

              <h3>Арендуй сеты</h3>

              <p>
                Бери понравившиеся сеты в аренду через
                SkinLease.
              </p>
            </article>

            <article className="giveaway-rule">
              <span className="giveaway-rule-number">
                02
              </span>

              <h3>Получай билеты</h3>

              <p>
                За каждые 1 000 ₽, потраченные на аренду,
                начисляется один билет.
              </p>
            </article>

            <article className="giveaway-rule">
              <span className="giveaway-rule-number">
                03
              </span>

              <h3>Повышай свой шанс</h3>

              <p>
                Каждый билет участвует в розыгрыше.
                Чем больше билетов у тебя, тем выше твоя доля
                на колесе.
              </p>
            </article>

            <article className="giveaway-rule">
              <span className="giveaway-rule-number">
                04
              </span>

              <h3>Следи за результатом</h3>

              <p>
                Победитель определяется случайным вращением
                колеса среди всех добавленных билетов.
              </p>
            </article>

          </div>
        </section>

                {/* ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ РОЗЫГРЫША */}
        <section className="giveaway-terms">
          <details className="giveaway-terms-details">
            <summary className="giveaway-terms-summary">
              <span className="giveaway-terms-icon" aria-hidden="true">
                i
              </span>

              <span className="giveaway-terms-heading">
                <span className="giveaway-eyebrow">
                  ДЕТАЛИ РОЗЫГЫРША
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
                <span className="giveaway-term-number">01</span>

                <div>
                  <h3>Билеты за аренду</h3>

                  <p>
                      При аренде с отменой со стороны SkinLease участник один
                      раз получает билеты на текущий конкурс в зависимости от суммы аренды:
                      например, 5 000 ₽ = 5 билетов.
                      При последующих арендах с отменой со стороны SkinLease билеты повторно
                      не начисляются. Дополнительные билеты можно получить 
                      только при аренде с отменой со стороны клиента. Покупатели с фанпей не участвуют в розыгрыше. Строго авито/телеграм/сайт.
                  </p>
                </div>
              </article>

              <article className="giveaway-term">
                <span className="giveaway-term-number">02</span>

                <div>
                  <h3>Получение приза</h3>

                  <p>
                    Приз может быть
                    выдан в виде скина CS2 или в денежном
                    эквиваленте переводом на карту российского
                    банка, заранее уточняйте у организатора конкурса, в каком виде выдается приз.
                  </p>
                </div>
              </article>

              <article className="giveaway-term">
                <span className="giveaway-term-number">03</span>

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