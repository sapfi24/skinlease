const steps = [
  {
    number: "01",
    title: "Выбираете сет",
    text: "Открываете каталог и находите подходящий сет.",
  },
  {
    number: "02",
    title: "Пишете нам",
    text: "Связываетесь с SkinLease через Telegram.",
  },
  {
    number: "03",
    title: "Оформляем аренду",
    text: "Согласовываем срок, стоимость и детали аренды.",
  },
  {
    number: "04",
    title: "Получаете сет",
    text: "Получаете скины и наслаждаетесь игрой. Мы заранее предупредим вас о завершении аренды, чтобы всё прошло комфортно и без неожиданностей.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="section how-section"
    >
      <div className="container">

        <div className="section-header">

          <div>
            <div className="section-kicker">
              КАК ЭТО РАБОТАЕТ
            </div>

            <h2>
              От выбора до игры
              <br />
              всего несколько шагов.
            </h2>
          </div>

        </div>

        <div className="steps">

          {steps.map((step) => (
            <div
              className="step"
              key={step.number}
            >
              <div className="step-line">
                <span>{step.number}</span>
              </div>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
