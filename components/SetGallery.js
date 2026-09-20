"use client";

import { useState } from "react";

export default function SetGallery({ images, name }) {
  const [activeImage, setActiveImage] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <>
      <div className="set-gallery">

        <div
          className="gallery-main"
          onClick={() => setFullscreen(true)}
        >
          <img
            src={images[activeImage]}
            alt={`${name} — фото ${activeImage + 1}`}
          />

          <div className="gallery-expand">
            ⤢
          </div>
        </div>

        <div className="gallery-thumbs">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`gallery-thumb ${
                activeImage === index ? "active" : ""
              }`}
              onClick={() => setActiveImage(index)}
            >
              <img
                src={image}
                alt={`${name} — миниатюра ${index + 1}`}
              />
            </button>
          ))}
        </div>

      </div>

      {fullscreen && (
        <div
          className="gallery-modal"
          onClick={() => setFullscreen(false)}
        >
          <button
            type="button"
            className="gallery-close"
            onClick={() => setFullscreen(false)}
          >
            ×
          </button>

          <img
            src={images[activeImage]}
            alt={name}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
