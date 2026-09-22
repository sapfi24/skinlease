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
            <span className="arrow-icon">&#8599;</span>
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