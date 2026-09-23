"use client";

import { useState } from "react";
import faqCategories from "../data/faq";

function Chevron({ open }) {
  return (
    <svg
      className={`faq-chevron ${open ? "open" : ""}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(-1);

  const category = faqCategories[activeCategory];

  const changeCategory = (index) => {
    setActiveCategory(index);
    setOpenQuestion(-1);
  };

  return (
    <section className="faq-section">
      <div className="container">

        <div className="faq-header">
          <div>
            <span className="section-kicker">
              FAQ
            </span>

            <h1>
              Частые вопросы
            </h1>

            <p>
              Всё, что нужно знать
              <br />
              об аренде сетов.
            </p>
          </div>
        </div>


        <div className="faq-layout">

          {/* =========================
              КАТЕГОРИИ
          ========================== */}

          <aside className="faq-categories">

            {faqCategories.map((item, index) => {
              const active = index === activeCategory;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`faq-category ${
                    active ? "active" : ""
                  }`}
                  onClick={() => changeCategory(index)}
                >
                  <span className="faq-category-left">

                    <span className="faq-category-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      {item.title}
                    </span>

                  </span>

                  <span className="faq-category-arrow">
                    →
                  </span>
                </button>
              );
            })}

          </aside>


          {/* =========================
              ВОПРОСЫ
          ========================== */}

          <div className="faq-content">

            <div className="faq-content-header">

              <div>
                <span className="faq-content-kicker">
                  {category.title.toUpperCase()}
                </span>

                <h2>
                  Ответы на вопросы
                </h2>
              </div>

              <span className="faq-content-count">
                {String(category.questions.length).padStart(2, "0")}
              </span>

            </div>


            <div className="faq-questions">

              {category.questions.map((item, index) => {
                const open = index === openQuestion;

                return (
                  <div
                    className={`faq-item ${
                      open ? "open" : ""
                    }`}
                    key={item.question}
                  >

                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => {
                        setOpenQuestion(
                          open ? -1 : index
                        );
                      }}
                      aria-expanded={open}
                    >

                      <span className="faq-question-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="faq-question-title">
                        {item.question}
                      </span>

                      <Chevron open={open} />

                    </button>


                    <div className="faq-answer-wrap">

                      <div className="faq-answer">
                        <p>
                          {item.answer}
                        </p>
                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}