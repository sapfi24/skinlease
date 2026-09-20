const advantages = [
  {
    number: "01",
    title: "Готовый сет",
    text: "Не нужно собирать инвентарь по отдельным предметам."
  },
  {
    number: "02",
    title: "Быстрая выдача",
    text: "Связались в Telegram — согласовали аренду — получили сет."
  },
  {
    number: "03",
    title: "Гибкий срок",
    text: "Выбирайте срок аренды под свои задачи."
  },
  {
    number: "04",
    title: "Поддержка",
    text: "Остаёмся на связи на протяжении всей аренды."
  }
];

export default function Advantages() {
  return (
    <section id="advantages" className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-kicker">
              WHY SKINLEASE
            </div>

            <h2 className="section-title">
              Всё просто.
            </h2>
          </div>

          <p className="section-text">
            SkinLease создан вокруг одной идеи —
            сделать аренду готового инвентаря
            максимально понятной.
          </p>
        </div>

        <div className="trust-grid">
          {advantages.map((item) => (
            <div key={item.number} className="trust-card">
              <div className="trust-number">
                {item.number}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
