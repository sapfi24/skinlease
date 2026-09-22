export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-noise" />

      <div className="container hero-grid">

        <div className="hero-content">
          <div className="eyebrow">
            <span />
            SKINLEASE
          </div>

          <h1>
            Аренда сетов CS2
            <br />
            <span>без залога.</span>
          </h1>

          <p className="hero-description">
            Готовые инвентари по выгодным ценам.
            Выбирайте понравившийся сет, оформляйте аренду
            и играйте без покупки всего инвентаря.
          </p>

          <div className="hero-actions">
            <a href="#sets" className="button-primary">
              Смотреть сеты
              <span>→</span>
            </a>

            <a
              href="https://t.me/USERNAME"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Написать в Telegram
              <span>&#8599;</span>
            </a>
          </div>

          <div className="hero-points">
            <div>
              <strong>Без залога</strong>
              <span>никаких дополнительных платежей</span>
            </div>

            <div>
              <strong>Лучшие цены</strong>
              <span>платите только за аренду</span>
            </div>

            <div>
              <strong>Готовые сеты</strong>
              <span>всё уже собрано за вас</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-simple">
          <div className="set-visual">

            <div className="set-visual-top">
              <div>
                <span>PINK COLLECTION</span>
                <h2>Pink Set</h2>
              </div>

              <div className="set-status">
                <i />
                В наличии
              </div>
            </div>

            <div className="set-photo-placeholder">
              <div className="photo-glow" />

              <div className="photo-label">
                PREVIEW
              </div>

              <div className="photo-title">
                PINK
              </div>

              <div className="photo-line" />
            </div>

            <div className="set-visual-bottom">
              <div>
                <span>АРЕНДА ОТ</span>
                <strong>2 000 ₽</strong>
                <small>/ 6 дней</small>
              </div>

              <a href="#sets" className="set-view-button">
                Посмотреть →
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
