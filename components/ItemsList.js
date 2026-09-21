"use client";

import { useState } from "react";

export default function ItemsList({ items }) {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = expanded
    ? items
    : items.slice(0, 6);

  return (
    <>
      <div className="items-list">
        {visibleItems.map((item, index) => (
          <div
            className="inventory-item"
            key={`${item}-${index}`}
          >
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>{item}</strong>

            <span className="item-check">
              ✓
            </span>
          </div>
        ))}
      </div>

      {items.length > 6 && (
        <button
          className="show-more-btn"
          onClick={() =>
            setExpanded(!expanded)
          }
        >
          {expanded
            ? "Свернуть список"
            : `Показать ещё ${items.length - 6} предметов`}
        </button>
      )}
    </>
  );
}
