export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-noise" />

      <div className="container hero-grid">

        <div className="hero-content">

          <div className="eyebrow">
            <span />
            ARENA OF SKINS
          </div>

          <h1>
            Играй красиво.
            <br />
            <span>Плати меньше.</span>
          </h1>

          <p className="hero-description">
            Готовые сеты CS2 в аренду по выгодным ценам.
            Без залога и покупки инвентаря за полную стоимость.
          </p>

          <div className="hero-actions">

            <a
              href="#sets"
              className="button-primary"
            >
              Смотреть сеты
              <span>→</span>
            </a>

            <a
              href="https://t.me/USERNAME"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Telegram
              <span>↗</span>
            </a>

          </div>

          <div className="hero-points">
            <div>
              <strong>Без залога</strong>
              <span>никаких замороженных денег</span>
            </div>

            <div>
              <strong>Выгодные цены</strong>
              <span>платите только за аренду</span>
            </div>

            <div>
              <strong>Готовый сет</strong>
              <span>всё уже собрано за вас</span>
            </div>
          </div>

        </div>

        <div className="hero-showcase">

          <div className="showcase-glow" />

          <div className="showcase-card">

            <div className="showcase-header">
              <div>
                <span className="showcase-label">
                  FEATURED SET
                </span>

                <h2>Pink Inventory</h2>
              </div>

              <div className="available">
                <i />
                В наличии
              </div>
            </div>

            <div className="showcase-image">
              <div className="mock-item mock-one" />
              <div className="mock-item mock-two" />
              <div className="mock-item mock-three" />
              <div className="mock-item mock-four" />
              <div className="mock-item mock-five" />
              <div className="mock-item mock-six" />
            </div>

            <div className="showcase-bottom">

              <div>
                <span className="price-caption">
                  АРЕНДА
                </span>

                <div className="showcase-price">
                  2 000 ₽
                  <small>/ 6 дней</small>
                </div>
              </div>

              <a href="#sets" className="circle-arrow">
                →
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
