import sets from "../../data/sets";
import SetCard from "../../components/SetCard";

const statusPriority = {
  available: 0,
  rented: 1,
  tradeban: 2,
};

export default function SetsPage() {
  const sortedSets = [...sets].sort((a, b) => {
    const priorityA = statusPriority[a.status] ?? 0;
    const priorityB = statusPriority[b.status] ?? 0;

    return priorityA - priorityB;
  });

  return (
    <main className="sets-page">
      <div className="container">

        <div className="sets-page-header">
          <span className="section-kicker">
            КАТАЛОГ
          </span>

          <h1>
            Все сеты
          </h1>

          <p>
            Выберите готовый инвентарь CS2
            для аренды без залога.
          </p>
        </div>

        <div className="hud-sets-grid">
          {sortedSets.map((set, index) => (
            <SetCard
              key={set.slug}
              set={set}
              index={index}
            />
          ))}
        </div>

      </div>
    </main>
  );
}