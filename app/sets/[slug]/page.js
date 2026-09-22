import Link from "next/link";
import { notFound } from "next/navigation";

import sets from "../../../data/sets";
import SetGallery from "../../../components/SetGallery";
import ItemsList from "../../../components/ItemsList";

function getItemsText(count) {
  if (count % 10 === 1 && count % 100 !== 11) {
    return `${count} предмет`;
  }

  if (
    [2, 3, 4].includes(count % 10) &&
    ![12, 13, 14].includes(count % 100)
  ) {
    return `${count} предмета`;
  }

  return `${count} предметов`;
}

function getStatusText(status) {
  switch (status) {
    case "available":
      return "Доступен";

    case "rented":
      return "В аренде";

    case "tradeban":
      return "Трейд бан";

    default:
      return status || "Доступен";
  }
}

export default async function SetPage({ params }) {
  const { slug } = await params;

  const set = sets.find((item) => item.slug === slug);

  if (!set) {
    notFound();
  }

  const items = Array.isArray(set.items) ? set.items : [];
  const moneyback = set.moneyback || "1 500 ₽";

  return (
    <main className="set-page">
      <div className="container">

        <div className="set-page-grid">

          {/* =========================
              ЛЕВАЯ КОЛОНКА
          ========================== */}

          <div className="set-left">

            <Link
              href="/sets"
              className="back-link"
            >
              ← Все сеты
            </Link>

            <SetGallery
              images={set.images}
              name={set.name}
            />

            {/* ДЕТАЛИ АРЕНДЫ ПОД ФОТО */}

            <section className="rent-details-card">

              <div className="rent-details-header">
                <div>
                  <div className="section-kicker">
                    ДЕТАЛИ АРЕНДЫ
                  </div>

                  <h2>
                    Условия
                  </h2>
                </div>
              </div>

              <div className="rent-detail-row">
                <span>
                  Стоимость аренды
                </span>

                <strong>
                  {set.price}
                </strong>
              </div>

              <div className="rent-detail-row">
                <span>
                  Срок аренды
                </span>

                <strong>
                  {set.duration}
                </strong>
              </div>

              <div className="rent-detail-row">
                <span>Стоимость сета (включая скины) </span>
                 <strong>{set.value || "—"}</strong>
              </div>

              <div className="rent-detail-row">
                <span>
                  Манибэк
                </span>

                <strong className="green">
                  {moneyback}
                </strong>
              </div>

              <div className="rent-detail-note">
                При самостоятельной отмене трейда вам
                возвращается {moneyback}
              </div>

            </section>

          </div>

          {/* =========================
              ПРАВАЯ КОЛОНКА
          ========================== */}

          <div className="set-details">

            <div className="set-detail-top">

              <span className="detail-tag">
                {set.tag}
              </span>

              <span
                className={`detail-available status-${set.status || "available"}`}
              >
                {getStatusText(set.status)}
              </span>

            </div>

            <h1>
              {set.name}
            </h1>

            <p className="set-description">
              {set.description}
            </p>

            {/* =========================
                ЦЕНА
            ========================== */}

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
                  {moneyback}
                </strong>

                <span className="moneyback-text">
                  при самостоятельной отмене
                </span>

              </div>

            </div>

            <div className="price-explanation">
              Вы оплачиваете {set.price}. При самостоятельной
              отмене трейда вам возвращается {moneyback}
            </div>

            {/* =========================
                КНОПКА
            ========================== */}

            <a
              href="https://t.me/USERNAME"
              target="_blank"
              rel="noreferrer"
              className="rent-button"
            >
              Арендовать этот сет
              <span>&#8599;</span>
            </a>

            <div className="rent-note">
              Без залога · Оформление через Telegram
            </div>

            {/* =========================
                ПРЕИМУЩЕСТВА
            ========================== */}

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
                    Лучшая цена
                  </strong>

                  <p>
                    Мы предлагаем лучшие цены на аренду сетов
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

            {/* =========================
                СОСТАВ
            ========================== */}

            {items.length > 0 && (
              <>
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
                      {getItemsText(items.length)}
                    </span>

                  </div>

                  <ItemsList items={items} />

                </section>
              </>
            )}

          </div>

        </div>

      </div>
    </main>
  );
}