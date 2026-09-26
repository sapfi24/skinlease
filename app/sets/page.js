"use client";

import { useState } from "react";
import sets from "../../data/sets";
import SetCard from "../../components/SetCard";

const statusPriority = {
  available: 0,
  rented: 1,
  tradeban: 1,
  longterm: 2,
};

const parseStatusDate = (value) => {
  if (!value || typeof value !== "string") {
    return null;
  }

  const match = value.trim().match(/^(\d{1,2})\.(\d{1,2})$/);

  if (!match) {
    return null;
  }

  const day = Number(match[1]);
  const month = Number(match[2]);

  if (
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12
  ) {
    return null;
  }

  return month * 100 + day;
};

const parseMoney = (value) => {
  if (!value) {
    return null;
  }

  const digits = String(value).replace(/\D/g, "");

  if (!digits) {
    return null;
  }

  return Number(digits);
};

const sortByUnlockDate = (a, b) => {
  const priorityA = statusPriority[a.status] ?? 1;
  const priorityB = statusPriority[b.status] ?? 1;

  // Сначала доступные
  if (priorityA !== priorityB) {
    return priorityA - priorityB;
  }

  // Доступные сохраняют исходный порядок
  if (
    a.status === "available" &&
    b.status === "available"
  ) {
    return 0;
  }

  // Долгосрочные сохраняют исходный порядок
  if (
    a.status === "longterm" &&
    b.status === "longterm"
  ) {
    return 0;
  }

  const dateA = parseStatusDate(a.statusUntil);
  const dateB = parseStatusDate(b.statusUntil);

  // Оба имеют дату
  if (dateA !== null && dateB !== null) {
    return dateA - dateB;
  }

  // Дата выше обычного текста
  if (dateA !== null && dateB === null) {
    return -1;
  }

  if (dateA === null && dateB !== null) {
    return 1;
  }

  // Если у обоих текст — исходный порядок
  return 0;
};

const sortByValue = (a, b) => {
  const valueA = parseMoney(a.value);
  const valueB = parseMoney(b.value);

  // Сеты без стоимости отправляем в конец
  if (valueA === null && valueB === null) {
    return 0;
  }

  if (valueA === null) {
    return 1;
  }

  if (valueB === null) {
    return -1;
  }

  return valueA - valueB;
};

const sortByPrice = (a, b) => {
  const priceA = parseMoney(a.price);
  const priceB = parseMoney(b.price);

  // Сеты без цены отправляем в конец
  if (priceA === null && priceB === null) {
    return 0;
  }

  if (priceA === null) {
    return 1;
  }

  if (priceB === null) {
    return -1;
  }

  return priceA - priceB;
};

export default function SetsPage() {
  const [sortType, setSortType] = useState("date");

  const sortedSets = [...sets].sort((a, b) => {
    switch (sortType) {
      case "value":
        return sortByValue(a, b);

      case "price":
        return sortByPrice(a, b);

      case "date":
      default:
        return sortByUnlockDate(a, b);
    }
  });

  return (
    <main className="sets-page">
      <div className="container">

        <div className="sets-page-header">
          <div>
            <span className="section-kicker">
              КАТАЛОГ
            </span>

            <h1>
              Все сеты
            </h1>

            <p>
              Наведите курсор на статус сета, чтобы увидеть дополнительную информацию о его доступности.
            </p>
          </div>

          <div className="sets-sort">
            <label htmlFor="sets-sort-select">
              СОРТИРОВКА
            </label>

            <select
              id="sets-sort-select"
              value={sortType}
              onChange={(event) =>
                setSortType(event.target.value)
              }
            >
              <option value="date">
                По дате разблокировки
              </option>

              <option value="value">
                По стоимости сета
              </option>

              <option value="price">
                По стоимости аренды
              </option>
            </select>
          </div>
        </div>

        <div className="hud-sets-grid">
          {sortedSets.map((set, index) => (
            <SetCard
              key={set.slug}
              set={set}
              index={index}
            />
          ))}
        </div>

      </div>
    </main>
  );
}