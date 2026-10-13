"use client";

import { useEffect, useRef, useState } from "react";

function getPoint(angle, radius = 150) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: Number((160 + radius * Math.sin(radians)).toFixed(2)),
    y: Number((160 - radius * Math.cos(radians)).toFixed(2)),
  };
}

function getSectorPath(startAngle, endAngle) {
  const start = getPoint(startAngle);
  const end = getPoint(endAngle);

  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return [
    "M 160 160",
    `L ${start.x} ${start.y}`,
    `A 150 150 0 ${largeArc} 1 ${end.x} ${end.y}`,
    "Z",
  ].join(" ");
}

function getReadableTextRotation(angle) {
  let rotation = angle - 90;

  if (rotation > 90) {
    rotation -= 180;
  }

  if (rotation < -90) {
    rotation += 180;
  }

  return rotation;
}

export default function GiveawayWheel({
  participants,
  colors = [],
}) {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

  const timerRef = useRef(null);

  const entries = participants.filter(
    (person) =>
      person.name &&
      Number.isInteger(Number(person.tickets)) &&
      Number(person.tickets) > 0
  );

  const totalTickets = entries.reduce(
    (sum, person) => sum + Number(person.tickets),
    0
  );

  const sectors = [];
  let currentAngle = 0;

  if (totalTickets > 0) {
    entries.forEach((person, index) => {
      const tickets = Number(person.tickets);
      const angle = (tickets / totalTickets) * 360;

      sectors.push({
        ...person,
        tickets,
        index,
        startAngle: currentAngle,
        endAngle: currentAngle + angle,
        angle,
        color: colors.length
          ? colors[index % colors.length]
          : "#19C982",
      });

      currentAngle += angle;
    });
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  function spinWheel() {
    if (isSpinning || totalTickets === 0) {
      return;
    }

    // Выбираем случайный билет:
    // вероятность участника пропорциональна количеству билетов.
    const selectedTicket = Math.floor(
      Math.random() * totalTickets
    );

    let cumulativeTickets = 0;
    let selectedSector = null;

    for (const sector of sectors) {
      cumulativeTickets += sector.tickets;

      if (selectedTicket < cumulativeTickets) {
        selectedSector = sector;
        break;
      }
    }

    if (!selectedSector) {
      return;
    }

    // Центр выбранного сектора должен остановиться
    // ровно напротив верхнего указателя.
    const middleAngle =
      (selectedSector.startAngle +
        selectedSector.endAngle) /
      2;

    const currentAngle =
      ((rotation % 360) + 360) % 360;

    const adjustment =
      (360 - ((middleAngle + currentAngle) % 360)) % 360;

    const nextRotation =
      rotation + 360 * 8 + adjustment;

    setWinner(null);
    setIsSpinning(true);
    setRotation(nextRotation);

    timerRef.current = setTimeout(() => {
      setIsSpinning(false);
      setWinner(selectedSector);
    }, 8600);
  }

  return (
    <div className="giveaway-wheel-card">
      <div className="giveaway-wheel-heading">
        <div>
          <span className="giveaway-eyebrow">
            СЛУЧАЙНЫЙ ВЫБОР
          </span>

          <h2>Колесо розыгрыша</h2>
        </div>

        <span className="giveaway-live-dot" />
      </div>

      <div className="giveaway-wheel-area">
        <div className="giveaway-wheel-pointer" />

        <div
          className="giveaway-wheel-rotor"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <svg
            viewBox="0 0 320 320"
            className="giveaway-wheel-svg"
            role="img"
            aria-label="Колесо розыгрыша SkinLease с именами участников"
          >
            <circle
              cx="160"
              cy="160"
              r="154"
              fill="#171820"
              stroke="#424451"
              strokeWidth="5"
            />

            {totalTickets > 0 ? (
              <>
                {sectors.length === 1 ? (
                  <circle
                    cx="160"
                    cy="160"
                    r="150"
                    fill={sectors[0].color}
                    stroke="#171820"
                    strokeWidth="2"
                  />
                ) : (
                  sectors.map((sector) => (
                    <path
                      key={sector.id}
                      d={getSectorPath(
                        sector.startAngle,
                        sector.endAngle
                      )}
                      fill={sector.color}
                      stroke="#171820"
                      strokeWidth="2"
                    />
                  ))
                )}

                {/* Никнеймы участников внутри секторов */}
                {sectors.map((sector) => {
                  const middleAngle =
                    (sector.startAngle +
                      sector.endAngle) /
                    2;

                  const labelPoint = getPoint(
                    middleAngle,
                    92
                  );

                  const textRotation =
                    getReadableTextRotation(middleAngle);

                  const fontSize =
                    sector.angle >= 65
                      ? 12
                      : sector.angle >= 30
                        ? 10
                        : 8;

                  const labelLength = Math.min(
                    100,
                    Math.max(
                      28,
                      String(sector.name).length *
                        fontSize *
                        0.62
                    )
                  );

                  return (
                    <text
                      key={`label-${sector.id}`}
                      x={labelPoint.x}
                      y={labelPoint.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${textRotation}, ${labelPoint.x}, ${labelPoint.y})`}
                      fill="#FFFFFF"
                      stroke="#171820"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      paintOrder="stroke"
                      fontSize={fontSize}
                      fontWeight="700"
                      textLength={labelLength}
                      lengthAdjust="spacingAndGlyphs"
                    >
                      {sector.name}
                    </text>
                  );
                })}
              </>
            ) : (
              <circle
                cx="160"
                cy="160"
                r="150"
                fill="#262731"
              />
            )}

            {/* Центральная кнопка */}
            <circle
              cx="160"
              cy="160"
              r="30"
              fill="#101116"
              stroke="#737786"
              strokeWidth="3"
            />
            
          </svg>
        </div>
      </div>

            
      <div className="giveaway-wheel-footer">
        <div className="giveaway-wheel-stat">
          <span>Участников</span>
          <strong>{entries.length}</strong>
        </div>

        <div className="giveaway-wheel-stat">
          <span>Всего билетов</span>
          <strong>{totalTickets}</strong>
        </div>
      </div>

      <button
        type="button"
        className="giveaway-spin-button"
        onClick={spinWheel}
        disabled={isSpinning || totalTickets === 0}
      >
        {isSpinning ? (
          "Определяем победителя..."
        ) : totalTickets === 0 ? (
          "Ожидаем участников"
        ) : (
          <>
            Крутить колесо
            <span>↗</span>
          </>
        )}
      </button>

      {winner && (
        <div className="giveaway-winner">
          <span>ПОБЕДИТЕЛЬ РОЗЫГРЫША</span>

          <strong>{winner.name}</strong>

          <p>
            Количество билетов: {winner.tickets}
          </p>
        </div>
      )}

      {totalTickets === 0 && (
        <p className="giveaway-wheel-hint">
          Колесо появится после добавления участников
          в список розыгрыша.
        </p>
      )}
    </div>
  );
}