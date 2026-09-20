export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            SKINLEASE
          </div>

          <h1>
            Играй с тем,
            <br />
            что <span>нравится.</span>
          </h1>

          <p className="hero-description">
            Аренда готовых тематических инвентарей CS2.
            Получите полноценный сет без необходимости
            покупать каждый предмет отдельно.
          </p>

          <div className="hero-actions">
            <a href="#sets" className="button-primary">
              Смотреть сеты
            </a>

            <a
              href="https://t.me/USERNAME"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Написать в Telegram
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <strong>Готовые сеты</strong>
              <br />
              от нескольких дней
            </div>

            <div>
              <strong>Быстрая выдача</strong>
              <br />
              через Telegram
            </div>

            <div>
              <strong>Поддержка</strong>
              <br />
              на протяжении аренды
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />

          <div className="set-showcase">
            <div className="showcase-top">
              <div>
                <div className="showcase-label">FEATURED SET</div>
                <div className="showcase-title">
                  Pink Inventory
                </div>
              </div>

              <div className="live-pill">
                <i />
                AVAILABLE
              </div>
            </div>

            <div className="inventory-preview">
              <div className="item-card item-pink">
                <div className="item-name">ITEM 01</div>
              </div>

              <div className="item-card item-purple">
                <div className="item-name">ITEM 02</div>
              </div>

              <div className="item-card item-ice">
                <div className="item-name">ITEM 03</div>
              </div>

              <div className="item-card item-purple">
                <div className="item-name">ITEM 04</div>
              </div>

              <div className="item-card item-ice">
                <div className="item-name">ITEM 05</div>
              </div>

              <div className="item-card item-pink">
                <div className="item-name">ITEM 06</div>
              </div>
            </div>

            <div className="showcase-bottom">
              <div>
                <div className="price-label">АРЕНДА ОТ</div>

                <div className="price">
                  2 000 ₽ <span>/ 6 дней</span>
                </div>
              </div>

              <a href="#sets" className="view-set">
                Смотреть сет →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
