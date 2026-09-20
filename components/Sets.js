const sets = [
  {
    number: "01",
    name: "Pink Inventory",
    price: "2 000 ₽",
    period: "6 дней",
    className: "pink",
    tag: "POPULAR",
  },
  {
    number: "02",
    name: "Purple Inventory",
    price: "2 500 ₽",
    period: "7 дней",
    className: "purple",
    tag: "NEW",
  },
  {
    number: "03",
    name: "Red Inventory",
    price: "3 000 ₽",
    period: "7 дней",
    className: "red",
    tag: "LIMITED",
  },
  {
    number: "04",
    name: "Ice Inventory",
    price: "2 700 ₽",
    period: "7 дней",
    className: "ice",
    tag: "POPULAR",
  },
];

export default function Sets() {
  return (
    <section
      id="sets"
      className="section sets-section"
    >
      <div className="container">

        <div className="section-header sets-header">

          <div>
            <div className="section-kicker">
              ИНВЕНТАРИ
            </div>

            <h2>
              Выберите свой сет.
            </h2>
          </div>

          <a href="#contact" className="text-link">
            Все сеты →
          </a>

        </div>

        <div className="sets-grid">

          {sets.map((set) => (
            <article
              key={set.number}
              className={`set-card ${set.className}`}
            >

              <div className="set-card-top">

                <span className="set-number">
                  {set.number}
                </span>

                <span className="set-tag">
                  {set.tag}
                </span>

              </div>

              <div className="set-preview">

                <div className="preview-halo" />

                <div className="preview-shape shape-one" />
                <div className="preview-shape shape-two" />
                <div className="preview-shape shape-three" />

              </div>

              <div className="set-card-bottom">

                <div>
                  <h3>{set.name}</h3>

                  <p>
                    {set.price}
                    <span> / {set.period}</span>
                  </p>
                </div>

                <a
                  href="https://t.me/USERNAME"
                  target="_blank"
                  rel="noreferrer"
                  className="set-arrow"
                >
                  →
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
