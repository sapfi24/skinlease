const sets = [
  {
    index: "01",
    name: "Pink Inventory",
    price: "2 000 ₽",
    tag: "POPULAR",
    art: "art-pink",
    card: "set-pink"
  },
  {
    index: "02",
    name: "Purple Inventory",
    price: "2 500 ₽",
    tag: "NEW",
    art: "art-purple",
    card: "set-purple"
  },
  {
    index: "03",
    name: "Red Inventory",
    price: "3 000 ₽",
    tag: "LIMITED",
    art: "art-red",
    card: "set-red"
  },
  {
    index: "04",
    name: "Ice Inventory",
    price: "2 700 ₽",
    tag: "POPULAR",
    art: "art-ice",
    card: "set-ice"
  }
];

export default function Sets() {
  return (
    <section id="sets" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">
              COLLECTION
            </div>

            <h2 className="section-title">
              Выберите свой сет
            </h2>
          </div>

          <p className="section-text">
            Готовые тематические инвентари,
            собранные в едином стиле. Выбирайте
            подходящий вариант и переходите к аренде.
          </p>
        </div>

        <div className="sets-grid">
          {sets.map((set) => (
            <article
              key={set.name}
              className={`set-card ${set.card}`}
            >
              <div className="set-card-content">
                <div className="set-card-top">
                  <div className="set-index">
                    {set.index}
                  </div>

                  <div className="set-tag">
                    {set.tag}
                  </div>
                </div>

                <div className="set-art">
                  <div className="art-ring" />
                  <div className={`art-core ${set.art}`} />
                </div>

                <h3 className="set-name">
                  {set.name}
                </h3>

                <div className="set-bottom">
                  <div>
                    <div className="set-price-label">
                      АРЕНДА ОТ
                    </div>

                    <div className="set-price">
                      {set.price}
                    </div>
                  </div>

                  <a href="#contact" className="set-link">
                    Подробнее →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
