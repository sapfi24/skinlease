"use client";

import {
  useEffect,
  useMemo,
  useState,
  useRef
} from "react";
import Link from "next/link";
import sets from "../data/sets";

function getStatusText(status) {
  switch (status) {
    case "available":
      return "В НАЛИЧИИ";
    case "rented":
      return "В АРЕНДЕ";
    case "tradeban":
      return "ТРЕЙД БАН";
    default:
      return "В НАЛИЧИИ";
  }
}

function getStatusClass(status) {
  switch (status) {
    case "rented":
      return "hero-set-status-rented";
    case "tradeban":
      return "hero-set-status-tradeban";
    default:
      return "hero-set-status-available";
  }
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);

  const carouselSets = useMemo(() => {
    const available = sets.filter(
      (set) => set.status === "available" || !set.status
    );

    const rented = sets.filter(
      (set) => set.status === "rented"
    );

    const tradeban = sets.filter(
      (set) => set.status === "tradeban"
    );

    return [...available, ...rented, ...tradeban].slice(0, 4);
  }, []);

  useEffect(() => {
    if (carouselSets.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (
        (current + 1) % carouselSets.length
      ));
    }, 6500);

    return () => clearInterval(interval);
  }, [carouselSets.length]);

  const getRelativePosition = (index) => {
    const length = carouselSets.length;

    if (length <= 1) return "active";

    let diff = index - activeIndex;

    if (diff > length / 2) {
      diff -= length;
    }

    if (diff < -length / 2) {
      diff += length;
    }

    if (diff === 0) return "active";
    if (diff === -1) return "prev";
    if (diff === 1) return "next";

    return "hidden";
  };

  return (
    <section className="hero">
      <div className="hero-noise" />

      <div className="container hero-grid">

        <div className="hero-content">

          <div className="eyebrow">
            <span />
            SKINLEASE
          </div>

          <h1>
            Аренда сетов CS2
            <br />
            <span>без залога.</span>
          </h1>

          <p className="hero-description">
            Готовые инвентари по выгодным ценам.
            Выбирайте понравившийся сет, оформляйте аренду
            и играйте без покупки всего инвентаря.
          </p>

          <div className="hero-actions">

            <a
              href="#sets"
              className="button-primary"
            >
              Смотреть сеты
              <span>→</span>
            </a>

            <a
              href="https://t.me/USERNAME"
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Написать в Telegram

              <span className="hero-arrow-desktop">
                ↗
              </span>

              <svg
                className="hero-arrow-mobile"
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 11L11 3M5 3H11V9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

          </div>

          <div className="hero-points">

            <div>
              <strong>Без залога</strong>
              <span>никаких дополнительных платежей</span>
            </div>

            <div>
              <strong>Лучшие цены</strong>
              <span>платите только за аренду</span>
            </div>

            <div>
              <strong>Готовые сеты</strong>
              <span>всё уже собрано за вас</span>
            </div>

          </div>

        </div>


        <div className="hero-visual-simple">

          {carouselSets.length > 0 ? (
            <div
  className="hero-carousel"
  onTouchStart={(e) => {
    touchStartX.current =
      e.touches[0].clientX;
  }}
  onTouchEnd={(e) => {
    const diff =
      touchStartX.current -
      e.changedTouches[0].clientX;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
      setActiveIndex((current) =>
        (current + 1) %
        carouselSets.length
      );
    } else {
      setActiveIndex((current) =>
        current === 0
          ? carouselSets.length - 1
          : current - 1
      );
    }
  }}
>

              {carouselSets.map((set, index) => {
                const position = getRelativePosition(index);

                return (
                  <Link
                    key={set.slug}
                    href={`/sets/${set.slug}`}
                    className={`hero-carousel-card hero-carousel-${position}`}
                  >

                    <div
                      className="hero-carousel-image"
                      style={{
                        backgroundImage: `url("${set.images?.[0] || ""}")`,
                      }}
                    />

                    <div className="hero-carousel-overlay" />

                    <div className="hero-carousel-top">

                      <span className="hero-carousel-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`hero-carousel-status ${getStatusClass(
                          set.status
                        )}`}
                      >
                        <i />
                        {getStatusText(set.status)}
                      </span>

                    </div>

                    <div className="hero-carousel-bottom">

                      <div>
                        <span className="hero-carousel-kicker">
                          SKINLEASE SET
                        </span>

                        <h2>{set.name}</h2>

                        <div className="hero-carousel-price">
                          <strong>{set.price}</strong>
                          <span>/ {set.duration}</span>
                        </div>
                      </div>

                      <span className="hero-carousel-arrow">
                        →
                      </span>

                    </div>

                  </Link>
                );
              })}

              <div className="hero-carousel-dots">
                {carouselSets.map((set, index) => (
                  <button
                    key={set.slug}
                    type="button"
                    className={
                      index === activeIndex
                        ? "active"
                        : ""
                    }
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Показать ${set.name}`}
                  />
                ))}
              </div>

            </div>
          ) : (
            <div className="hero-carousel-empty">
              Сеты скоро появятся
            </div>
          )}

        </div>

      </div>
    </section>
  );
}