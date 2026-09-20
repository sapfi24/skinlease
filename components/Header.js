export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        <a href="/" className="logo">
          <img
            src="/logo.png"
            alt="SkinLease"
          />
        </a>

        <nav className="nav">
          <a href="#sets" className="nav-link">
            Сеты
          </a>

          <a href="#advantages" className="nav-link">
            Почему мы
          </a>

          <a href="#how" className="nav-link">
            Как это работает
          </a>

          <a
            href="https://t.me/USERNAME"
            target="_blank"
            rel="noreferrer"
            className="nav-button"
          >
            Telegram <span>↗</span>
          </a>
        </nav>

      </div>
    </header>
  );
}
