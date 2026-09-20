import Link from "next/link";
import sets from "../data/sets";

export default function Sets() {
  return (
    <section
      id="sets"
      className="section sets-section"
    >
      <div className="container">

        <div className="section-header sets-header">

          <div>
            <div className="section-kicker">
              ИНВЕНТАРИ
            </div>

            <h2>
              Выберите свой сет.
            </h2>
          </div>

          <Link
            href="/sets"
            className="text-link"
          >
            Все сеты →
          </Link>

        </div>

        <div className="sets-grid">

          {sets.map((set, index) => (
            <Link
              key={set.slug}
              href={`/sets/${set.slug}`}
              className={`set-card ${
                set.slug === "pink"
                  ? "pink"
                  : set.slug === "purple"
                  ? "purple"
                  : set.slug === "red"
                  ? "red"
                  : "ice"
              }`}
            >

              <div className="set-card-top">

                <span className="set-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="set-tag">
                  {set.tag}
                </span>

              </div>

              <div className="set-preview">

                <div className="preview-halo" />

                <img
                  src={set.images[0]}
                  alt={set.name}
                  className="set-card-image"
                />

              </div>

              <div className="set-card-bottom">

                <div>
                  <h3>
                    {set.name}
                  </h3>

                  <p>
                    {set.price}
                    <span>
                      {" "}
                      / {set.duration}
                    </span>
                  </p>
                </div>

                <div className="set-arrow">
                  →
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
