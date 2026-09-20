export default function CTA() {
  return (
    <section
      id="contact"
      className="cta-section"
    >
      <div className="container">

        <div className="cta-box">

          <div className="cta-glow" />

          <div className="cta-content">

            <div className="section-kicker">
              SKINLEASE
            </div>

            <h2>
              Нашли
              <br />
              свой сет?
            </h2>

            <p>
              Напишите нам в Telegram,
              чтобы проверить наличие
              и оформить аренду без залога.
            </p>

            <a
              href="https://t.me/USERNAME"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Написать в Telegram
              <span>↗</span>
            </a>

          </div>

          <div className="cta-side">
            <div className="cta-circle">
              <span>SL</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
