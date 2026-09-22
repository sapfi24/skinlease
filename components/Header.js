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

          <a href="#advantages" className="nav-link">
            Почему мы
          </a>

          <a href="/reviews" className="nav-link">
            Отзывы
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
            href="#advantages"
            onClick={() => setOpen(false)}
          >
            Почему мы
          </a>

          <a>
            href="/reviews"
            onClick={() => setOpen(false)}

             Отзывы
          </a>

          <a
            href="#how"
            onClick={() => setOpen(false)}
          >
            Как это работает
          </a>

          <a
            href="https://t.me/USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            Telegram

            <svg
              className="mobile-arrow"
              width="14"
              height="14"
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
      )}

    </header>
  );
}