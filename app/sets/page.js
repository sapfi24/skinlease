import Link from "next/link";
import sets from "../../data/sets";

export default function SetsPage() {
  return (
    <main className="catalog-page">

      <div className="container">

        <div className="catalog-head">
          <div>
            <div className="section-kicker">
              SKINLEASE
            </div>

            <h1>
              Все сеты
            </h1>

            <p>
              Готовые инвентари CS2 в аренду
              без залога.
            </p>
          </div>
        </div>

        <div className="catalog-grid">

          {sets.map((set) => (
            <Link
              key={set.slug}
              href={`/sets/${set.slug}`}
              className="catalog-card"
            >
              <div className="catalog-image">
                <img
                  src={set.images[0]}
                  alt={set.name}
                />

                <span className="catalog-tag">
                  {set.tag}
                </span>
              </div>

              <div className="catalog-info">

                <div>
                  <h2>{set.name}</h2>

                  <p>
                    {set.price}
                    <span> / {set.duration}</span>
                  </p>
                </div>

                <div className="catalog-arrow">
                  →
                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}