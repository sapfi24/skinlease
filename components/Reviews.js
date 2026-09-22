import reviews from "../data/reviews";

function getInitial(name) {
  if (!name) return "?";

  return name
    .trim()
    .charAt(0)
    .toUpperCase();
}

export default function Reviews({ limit }) {
  const displayedReviews = limit
    ? reviews.slice(0, limit)
    : reviews;

  return (
    <section
      id="reviews"
      className="section reviews-section"
    >
      <div className="container">

        <div className="section-header">

          <div>
            <div className="section-kicker">
              ОТЗЫВЫ
            </div>

            <h2>
              Что говорят
              <br />
              наши клиенты
            </h2>
          </div>

        </div>

        {reviews.length > 0 ? (

          <>

            <div className="reviews-grid">

              {displayedReviews.map((review) => (
                <article
                  className="review-card"
                  key={review.id}
                >

                  <div className="review-top">

                    <div className="review-author">

                      <div className="review-avatar">
                        {getInitial(review.name)}
                      </div>

                      <div>
                        <strong>
                          {review.name}
                        </strong>

                        {review.date && (
                          <span>
                            {review.date}
                          </span>
                        )}
                      </div>

                    </div>

                    <div className="review-stars">
                      ★★★★★
                    </div>

                  </div>

                  <p className="review-text">
                    {review.text}
                  </p>

                  {review.source && (
                    <div className="review-source">

                      <span>
                        Источник:
                      </span>

                      {review.sourceLink ? (
                        <a
                          href={review.sourceLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {review.source}

                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 11L11 3M5 3H11V9"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      ) : (
                        <strong>
                          {review.source}
                        </strong>
                      )}

                    </div>
                  )}

                </article>
              ))}

            </div>

            {limit && reviews.length > limit && (
              <div className="reviews-more">

                <a
                  href="/reviews"
                  className="button-secondary"
                >
                  Смотреть все отзывы

                  <svg
                    width="16"
                    height="16"
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

          </>

        ) : (

          <div className="reviews-empty">

            <div className="reviews-empty-mark">
              —
            </div>

            <h3>
              Отзывы скоро появятся
            </h3>

            <p>
              Здесь будут реальные отзывы клиентов
              SkinLease после аренды сетов.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}