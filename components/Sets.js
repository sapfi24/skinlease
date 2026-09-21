import Link from "next/link";
import sets from "../data/sets";
import SetCard from "./SetCard";

export default function Sets() {
  const availableSets = sets.filter(
    (set) => !set.status || set.status === "available"
  );

  return (
    <section className="sets-section">
      <div className="container">

        <div className="sets-heading">
          <div>
            <span className="section-kicker">
              ГОТОВЫ К АРЕНДЕ
            </span>

            <h2>
              Выберите свой сет.
            </h2>
          </div>
        </div>

        {availableSets.length > 0 ? (
          <>
            <div className="hud-sets-grid">
              {availableSets.map((set, index) => (
                <SetCard
                  key={set.slug}
                  set={set}
                  index={index}
                />
              ))}
            </div>

            <div className="sets-view-all">
              <Link
                href="/sets"
                className="sets-view-all-button"
              >
                Смотреть все сеты
                <span>→</span>
              </Link>
            </div>
          </>
        ) : (
          <div className="sets-empty">
            <div className="sets-empty-icon">
              —
            </div>

            <h3>
              Сейчас нет доступных сетов
            </h3>

            <p>
              Все доступные инвентари появятся здесь,
              как только освободятся.
            </p>

            <Link
              href="/sets"
              className="sets-view-all-button"
            >
              Посмотреть каталог
              <span>→</span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}