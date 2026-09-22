import Link from "next/link";

function getStatusText(status) {
  switch (status) {
    case "available":
      return "ДОСТУПЕН";
    case "rented":
      return "В АРЕНДЕ";
    case "tradeban":
      return "ТРЕЙД БАН";
    default:
      return "ДОСТУПЕН";
  }
}

function getStatusClass(status) {
  switch (status) {
    case "rented":
      return "hud-status-rented";
    case "tradeban":
      return "hud-status-tradeban";
    default:
      return "hud-status-available";
  }
}

export default function SetCard({ set, index }) {
  const image = set.images?.[0];
  const moneyback = set.moneyback || "1 500 ₽";

  return (
    <Link
      href={`/sets/${set.slug}`}
      className="hud-set-card"
    >
      {/* ФОТО И ИНФОРМАЦИЯ */}
      <div
        className="hud-set-image"
        style={
          image
            ? {
                backgroundImage: `url("${image}")`,
              }
            : undefined
        }
      >
        <div className="hud-image-overlay" />

        {/* Верхняя информация */}
        <div className="hud-top">
          <span className="hud-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span
            className={`hud-status ${getStatusClass(
              set.status
            )}`}
          >
            <i />
            {getStatusText(set.status)}
          </span>
        </div>

        {/* Нижняя информация НА ФОТО */}
        <div className="hud-card-info">
          <div className="hud-title-row">
            <div>
              <h3>{set.name}</h3>

              <span className="hud-value">
                Стоимость инвентаря{" "}
                {set.value || "—"}
              </span>
            </div>

            <span className="hud-arrow hud-arrow-desktop">
  ↗
</span>

<svg
  className="hud-arrow-mobile"
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
          </div>
        </div>
      </div>

      {/* ОТДЕЛЬНАЯ НИЖНЯЯ ПОЛОСА */}
      <div className="hud-footer">

        <div className="hud-footer-item">
          <span>АРЕНДА</span>
          <strong>{set.price}</strong>
        </div>

        <div className="hud-footer-divider" />

        <div className="hud-footer-item">
          <span>СРОК</span>
          <strong>{set.duration}</strong>
        </div>

        <div className="hud-footer-divider" />

        <div className="hud-footer-item">
          <span>МАНИБЭК</span>
          <strong>{moneyback}</strong>
        </div>

      </div>
    </Link>
  );
}