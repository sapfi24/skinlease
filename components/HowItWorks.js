const steps = [
  "Выберите понравившийся сет",
  "Напишите нам в Telegram",
  "Согласуйте срок и оплату",
  "Получите готовый инвентарь"
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">
              HOW IT WORKS
            </div>

            <h2 className="section-title">
              Четыре шага до игры
            </h2>
          </div>
        </div>

        <div className="trust-grid">
          {steps.map((step, index) => (
            <div key={step} className="trust-card">
              <div className="trust-number">
                0{index + 1}
              </div>

              <h3>{step}</h3>

              <p>
                {index === 0 &&
                  "Выберите сет из доступных вариантов."}

                {index === 1 &&
                  "Свяжитесь с нами для оформления аренды."}

                {index === 2 &&
                  "Определяем срок аренды и условия."}

                {index === 3 &&
                  "Получаете полный сет и можете играть."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
