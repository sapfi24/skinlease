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
              Остались
              <br />
              вопросы?
            </h2>

            <p>
              Ознакомьтесь с{" "}
              <a
                href="/faq"
                className="cta-inline-link"
              >
                разделом FAQ
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11L11 3M5 3H11V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>{" "}
              или напишите нам в Telegram
            </p>

            <a
              href="https://t.me/sapfiofcl"
              target="_blank"
              rel="noreferrer"
              className="button-primary"
            >
              Написать в Telegram

              <span className="cta-arrow-desktop">
      
              </span>

              <svg
                className="cta-arrow-mobile"
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 11L11 3M5 3H11V9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

          </div>

          <div className="cta-side">
            <div className="cta-circle">
              <span></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}