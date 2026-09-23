"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      <div className="header-inner">

        <a href="/" className="logo">
          <img
            src="/logo.png"
            alt="SkinLease"
          />
        </a>

        {/* ПК */}
        <nav className="nav desktop-nav">

          <a href="/sets" className="nav-link">
            Сеты
          </a>

          <a href="/#advantages" className="nav-link">
            Почему мы
          </a>

          <a href="/reviews" className="nav-link">
            Отзывы
          </a>

          <a href="/#how" className="nav-link">
            Как это работает
          </a>

          <a href="/faq" className="nav-link">
            FAQ
          </a>


        </nav>

        {/* Мобильная кнопка */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Открыть меню"
        >
          ☰
        </button>

      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="mobile-menu">

          <a
  href="/sets"
  onClick={() => setOpen(false)}
>
  Сеты
</a>

          <a
            href="/#advantages"
            onClick={() => setOpen(false)}
          >
            Почему мы
          </a>

          <a
            href="/reviews"
            onClick={() => setOpen(false)}
          >
             Отзывы
          </a>

          <a
            href="/#how"
            onClick={() => setOpen(false)}
          >
            Как это работает
          </a>

          <a
            href="/faq"
            onClick={() => setOpen(false)}
          >
            FAQ
          </a>


        </div>
      )}

    </header>
  );
}