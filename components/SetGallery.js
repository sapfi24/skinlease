"use client";

import { useEffect, useRef, useState } from "react";

export default function SetGallery({ images, name }) {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const thumbRefs = useRef([]);

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

  // Автоматически прокручиваем миниатюры
  // к текущей фотографии
  useEffect(() => {
    const activeThumb = thumbRefs.current[active];

    if (!activeThumb) return;

    activeThumb.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [active]);

  // Закрытие модального окна по Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div className="set-gallery">

        {/* Основное изображение */}
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


        {/* Миниатюры */}
        <div className="gallery-thumbs">

          {images.map((image, index) => (
            <button
              type="button"
              key={`${image}-${index}`}
              ref={(element) => {
                thumbRefs.current[index] = element;
              }}
              className={`gallery-thumb ${
                active === index ? "active" : ""
              }`}
              onClick={() => setActive(index)}
              aria-label={`Открыть фото ${index + 1}`}
            >
              <img
                src={image}
                alt={`${name} — миниатюра ${index + 1}`}
              />
            </button>
          ))}

        </div>

      </div>


      {/* Полноэкранная галерея */}
      {isOpen && (
        <div
          className="gallery-modal"
          onClick={() => setIsOpen(false)}
        >

          {/* Предыдущее фото */}
          <button
            type="button"
            className="gallery-modal-arrow left"
            onClick={(event) => {
              event.stopPropagation();
              previous();
            }}
            aria-label="Предыдущее фото"
          >
            ←
          </button>


          {/* Изображение */}
          <img
            src={images[active]}
            alt={name}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />


          {/* Следующее фото */}
          <button
            type="button"
            className="gallery-modal-arrow right"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
            aria-label="Следующее фото"
          >
            →
          </button>


          {/* Крестик */}
          <button
            type="button"
            className="gallery-close"
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(false);
            }}
            aria-label="Закрыть"
          >
            ×
          </button>

        </div>
      )}
    </>
  );
}