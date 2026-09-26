"use client";

import { useEffect, useRef, useState } from "react";
import sets from "../../data/sets";
import SetCard from "../../components/SetCard";

const statusPriority = {
  available: 0,
  rented: 1,
  tradeban: 1,
  longterm: 2,
};

const sortOptions = [
  {
    value: "date",
    label: "По дате разблокировки",
  },
  {
    value: "value",
    label: "По стоимости сета",
  },
  {
    value: "price",
    label: "По стоимости аренды",
  },
];

const parseStatusDate = (value) => {
  if (!value || typeof value !== "string") {
    return null;
  }

  const match = value
    .trim()
    .match(/^(\d{1,2})\.(\d{1,2})$/);

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

  if (priorityA !== priorityB) {
    return priorityA - priorityB;
  }

  if (
    a.status === "available" &&
    b.status === "available"
  ) {
    return 0;
  }

  if (
    a.status === "longterm" &&
    b.status === "longterm"
  ) {
    return 0;
  }

  const dateA = parseStatusDate(a.statusUntil);
  const dateB = parseStatusDate(b.statusUntil);

  if (dateA !== null && dateB !== null) {
    return dateA - dateB;
  }

  if (dateA !== null && dateB === null) {
    return -1;
  }

  if (dateA === null && dateB !== null) {
    return 1;
  }

  return 0;
};

const sortByValue = (a, b) => {
  const valueA = parseMoney(a.value);
  const valueB = parseMoney(b.value);

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
  const [sortDirection, setSortDirection] = useState("asc");
  const [isOpen, setIsOpen] = useState(false);

  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortRef.current &&
        !sortRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const selectedOption =
    sortOptions.find(
      (option) => option.value === sortType
    ) || sortOptions[0];

  const sortedSets = [...sets].sort((a, b) => {
    let result = 0;

    switch (sortType) {
      case "value":
        result = sortByValue(a, b);
        break;

      case "price":
        result = sortByPrice(a, b);
        break;

      case "date":
      default:
        result = sortByUnlockDate(a, b);
        break;
    }

    return sortDirection === "desc"
      ? -result
      : result;
  });

  const handleSortChange = (value) => {
    if (value === sortType) {
      setSortDirection((prev) =>
        prev === "asc" ? "desc" : "asc"
      );
    } else {
      setSortType(value);
      setSortDirection("asc");
    }

    setIsOpen(false);
  };

  const directionSymbol =
    sortDirection === "asc" ? "↑" : "↓";

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

          <div
            className={`sets-sort ${
              isOpen ? "is-open" : ""
            }`}
            ref={sortRef}
          >
            <span className="sets-sort-label">
              СОРТИРОВКА
            </span>

            <button
              type="button"
              className="sets-sort-trigger"
              onClick={() =>
                setIsOpen((prev) => !prev)
              }
              aria-expanded={isOpen}
              aria-haspopup="listbox"
            >
              <span className="sets-sort-trigger-content">
                <span className="sets-sort-arrow">
                  {directionSymbol}
                </span>

                <span>
                  {selectedOption.label}
                </span>
              </span>

              <svg
                className="sets-sort-chevron"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3.5 5.25L7 8.75L10.5 5.25"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className={`sets-sort-menu ${
                isOpen ? "is-visible" : ""
              }`}
              role="listbox"
            >
              {sortOptions.map((option) => {
                const isSelected =
                  sortType === option.value;

                const optionDirection =
                  isSelected
                    ? sortDirection
                    : "asc";

                return (
                  <button
                    key={option.value}
                    type="button"
                    className={`sets-sort-option ${
                      isSelected
                        ? "is-selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleSortChange(option.value)
                    }
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="sets-sort-option-left">
                      <span className="sets-sort-arrow">
                        {optionDirection === "asc"
                          ? "↑"
                          : "↓"}
                      </span>

                      <span>
                        {option.label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
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