import Link from "next/link";
import sets from "../data/sets";
import SetCard from "./SetCard";

export default function Sets() {
  /*
   * На главной показываем максимум 4 доступных сета.
   * Сначала идут сеты со статусом available,
   * а сеты без указанного status тоже считаются доступными.
   *
   * На странице /sets используется отдельный компонент,
   * поэтому полный каталог здесь не ограничивается.
   */
  const availableSets = sets
    .filter(
      (set) =>
        !set.status ||
        set.status === "available"
    )
    .slice(0, 4);

  return (
    <section
      id="sets"
      className="sets-section"
    >
      <div className="container">

        {/* Заголовок */}
        <div className="sets-heading">
          <div>

            <span className="section-kicker">
              ГОТОВЫ К АРЕНДЕ
            </span>

            <h2>
              Выбери свой сет
            </h2>

          </div>
        </div>


        {/* Доступные сеты */}
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


            {/* Кнопка полного каталога */}
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

          /* Если доступных сетов нет */
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