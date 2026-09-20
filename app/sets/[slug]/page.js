import Link from "next/link";
import { notFound } from "next/navigation";

import sets from "../../../data/sets";
import SetGallery from "../../../components/SetGallery";

export default async function SetPage({ params }) {
  const { slug } = await params;

  const set = sets.find((item) => item.slug === slug);

  if (!set) {
    notFound();
  }

  return (
    <main className="set-page">
      <div className="container">

        <Link href="/sets" className="back-link">
          ← Все сеты
        </Link>

        <div className="set-page-grid">

          {/* ФОТО */}

          <div className="set-gallery-column">
            <SetGallery
              images={set.images}
              name={set.name}
            />
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

            <h1>{set.name}</h1>

            <p className="set-description">
              {set.description}
            </p>

            {/* ЦЕНА */}

            <div className="price-card">

              <div className="main-price">

                <span className="price-label">
                  ОПЛАТА ЗА АРЕНДУ
                </span>

                <div className="price-value">
                  {set.price}
                </div>

                <span className="price-period">
                  за {set.duration}
                </span>

              </div>

              <div className="moneyback">

                <span className="moneyback-label">
                  МАНИБЭК
                </span>

                <strong>
                  1 500 ₽
                </strong>

                <span className="moneyback-text">
                  при самостоятельной отмене
                </span>

              </div>

            </div>

            <div className="price-explanation">
              Вы оплачиваете {set.price}. При самостоятельной
              отмене аренды вам возвращается 1 500 ₽.
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
              Без залога · Оформление через Telegram
            </div>

            {/* ПРЕИМУЩЕСТВА */}

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
                    Дополнительный залог не требуется
                  </p>
                </div>
              </div>

              <div className="rent-feature">
                <span className="rent-icon">
                  ₽
                </span>

                <div>
                  <strong>
                    Прозрачная цена
                  </strong>

                  <p>
                    Стоимость аренды известна заранее
                  </p>
                </div>
              </div>

              <div className="rent-feature">
                <span className="rent-icon">
                  @
                </span>

                <div>
                  <strong>
                    Поддержка в Telegram
                  </strong>

                  <p>
                    Оформление и связь напрямую
                  </p>
                </div>
              </div>

            </div>

            {/* СОСТАВ */}

            <div className="detail-divider" />

            <section className="detail-section">

              <div className="detail-section-heading">

                <div>
                  <div className="section-kicker">
                    СОСТАВ
                  </div>

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

            {/* ДЕТАЛИ */}

            <div className="detail-divider" />

            <section className="detail-section">

              <div className="section-kicker">
                ДЕТАЛИ АРЕНДЫ
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
                    Манибэк
                  </span>

                  <strong className="green">
                    1 500 ₽
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
