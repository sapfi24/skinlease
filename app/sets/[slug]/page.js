import Link from "next/link";
import { notFound } from "next/navigation";

import sets from "../../../data/sets";
import SetGallery from "../../../components/SetGallery";

export default async function SetPage({ params }) {
  const { slug } = await params;

  const set = sets.find(
    (item) => item.slug === slug
  );

  if (!set) {
    notFound();
  }

  return (
    <main className="set-page">

      <div className="container">

        <Link
          href="/sets"
          className="back-link"
        >
          ← Все сеты
        </Link>

        <div className="set-page-grid">

          {/* ГАЛЕРЕЯ */}

          <div className="set-gallery-column">
            <SetGallery
              images={set.images}
              name={set.name}
            />

            <div className="gallery-note">
              Фотографии показывают внешний вид сета.
            </div>
          </div>

          {/* ИНФОРМАЦИЯ */}

          <div className="set-details">

            <div className="set-detail-top">

              <span className="detail-tag">
                {set.tag}
              </span>

              <span className="detail-available">
                <i />
                В наличии
              </span>

            </div>

            <h1>
              {set.name}
            </h1>

            <p className="set-description">
              {set.description}
            </p>

            {/* ЦЕНА */}

            <div className="price-card">

              <div>
                <span className="price-label">
                  АРЕНДА
                </span>

                <div className="price-value">
                  {set.price}
                  <small>
                    / {set.duration}
                  </small>
                </div>
              </div>

              <div className="price-badge">
                без залога
              </div>

            </div>

            {/* USP */}

            <div className="rent-features">

              <div className="rent-feature">
                <span className="rent-icon">
                  ✓
                </span>

                <div>
                  <strong>
                    Без залога
                  </strong>

                  <p>
                    Дополнительная сумма не требуется
                  </p>
                </div>
              </div>

              <div className="rent-feature">
                <span className="rent-icon">
                  →
                </span>

                <div>
                  <strong>
                    Быстрая выдача
                  </strong>

                  <p>
                    Оформление через Telegram
                  </p>
                </div>
              </div>

              <div className="rent-feature">
                <span className="rent-icon">
                  ◉
                </span>

                <div>
                  <strong>
                    Поддержка
                  </strong>

                  <p>
                    Мы остаёмся на связи во время аренды
                  </p>
                </div>
              </div>

            </div>

            {/* КНОПКА */}

            <a
              href="https://t.me/USERNAME"
              target="_blank"
              rel="noreferrer"
              className="rent-button"
            >
              Арендовать этот сет
              <span>↗</span>
            </a>

            <div className="rent-note">
              Напишите нам в Telegram для проверки
              доступности и оформления аренды.
            </div>

            {/* СОСТАВ */}

            <div className="detail-divider" />

            <section className="detail-section">

              <div className="detail-section-heading">
                <div>
                  <span className="section-kicker">
                    СОСТАВ
                  </span>

                  <h2>
                    Что входит в сет
                  </h2>
                </div>

                <span className="items-count">
                  {set.items.length} предметов
                </span>
              </div>

              <div className="items-list">

                {set.items.map((item, index) => (
                  <div
                    className="inventory-item"
                    key={item}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>
                      {item}
                    </strong>

                    <span className="item-check">
                      ✓
                    </span>
                  </div>
                ))}

              </div>

            </section>

            {/* ХАРАКТЕРИСТИКИ */}

            <div className="detail-divider" />

            <section className="detail-section">

              <div className="section-kicker">
                ДЕТАЛИ
              </div>

              <div className="stats">

                <div className="stat">
                  <span>
                    Стоимость инвентаря
                  </span>

                  <strong>
                    {set.value}
                  </strong>
                </div>

                <div className="stat">
                  <span>
                    Залог
                  </span>

                  <strong className="green">
                    0 ₽
                  </strong>
                </div>

                <div className="stat">
                  <span>
                    Формат
                  </span>

                  <strong>
                    Готовый сет
                  </strong>
                </div>

              </div>

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}
