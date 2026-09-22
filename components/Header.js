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


        <nav className="nav desktop-nav">

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
            Telegram
            Telegram 
<svg
  className="arrow-icon"
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 11L11 3M5 3H11V9"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
          </a>

        </nav>


        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>


      </div>


      {open && (

        <div className="mobile-menu">

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
            href="https://t.me/USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            Telegram ↗
          </a>

        </div>

      )}


    </header>
  );
}