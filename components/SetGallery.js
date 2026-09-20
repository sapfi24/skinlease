"use client";

import { useState } from "react";

export default function SetGallery({ images, name }) {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const next = () => {
    setActive((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previous = () => {
    setActive((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <>
      <div className="set-gallery">

        <div className="gallery-main">

          <img
            src={images[active]}
            alt={`${name} — изображение ${active + 1}`}
            onClick={() => setIsOpen(true)}
          />

          <button
            type="button"
            className="gallery-arrow gallery-arrow-left"
            onClick={previous}
            aria-label="Предыдущее фото"
          >
            ←
          </button>

          <button
            type="button"
            className="gallery-arrow gallery-arrow-right"
            onClick={next}
            aria-label="Следующее фото"
          >
            →
          </button>

          <button
            type="button"
            className="gallery-expand"
            onClick={() => setIsOpen(true)}
            aria-label="Открыть изображение"
          >
            ⤢
          </button>

          <div className="gallery-counter">
            {active + 1} / {images.length}
          </div>

        </div>

        <div className="gallery-thumbs">

          {images.map((image, index) => (
            <button
              type="button"
              key={image}
              className={`gallery-thumb ${
                active === index ? "active" : ""
              }`}
              onClick={() => setActive(index)}
            >
              <img
                src={image}
                alt={`${name} — миниатюра ${index + 1}`}
              />
            </button>
          ))}

        </div>

        <div className="gallery-hint">
          Используйте стрелки или миниатюры для просмотра
        </div>

      </div>

      {isOpen && (
        <div
          className="gallery-modal"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="gallery-close"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>

          <button
            type="button"
            className="gallery-modal-arrow left"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
          >
            ←
          </button>

          <img
            src={images[active]}
            alt={name}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="gallery-modal-arrow right"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
          >
            →
          </button>

        </div>
      )}
    </>
  );
}
