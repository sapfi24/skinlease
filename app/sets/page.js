import sets from "../../data/sets";
import SetCard from "../../components/SetCard";

export default function SetsPage() {
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
          {sets.map((set, index) => (
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