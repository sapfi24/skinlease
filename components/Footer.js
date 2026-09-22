export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-inner">

        <div className="footer-brand">
          <img
            src="/logo.png"
            alt="SkinLease"
          />

          <span>
            Аренда сетов CS2 без залога
          </span>
        </div>

        <div className="footer-right">

          <a href="#sets">
            Сеты
          </a>

          <a href="#advantages">
            Почему мы
          </a>

          <a href="#how">
            Как это работает
          </a>

          <a
            href="https://t.me/sapfiofcl"
            target="_blank"
            rel="noreferrer"
          >
            Telegram ↗
          </a>

        </div>

      </div>

      <div className="container footer-bottom">
        © 2026 SkinLease
      </div>

    </footer>
  );
}
