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

export default function SetsPage() {
  const sortedSets = [...sets].sort((a, b) => {
    const priorityA = statusPriority[a.status] ?? 1;
    const priorityB = statusPriority[b.status] ?? 1;

    // Приоритет статуса
    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }

    // Доступные сеты сохраняют исходный порядок
    if (
      a.status === "available" &&
      b.status === "available"
    ) {
      return 0;
    }

    // Долгосрочная аренда всегда в самом конце
    if (
      a.status === "longterm" &&
      b.status === "longterm"
    ) {
      return 0;
    }

    const dateA = parseStatusDate(a.statusUntil);
    const dateB = parseStatusDate(b.statusUntil);

    // Если у обоих указаны даты — сортируем по дате
    if (dateA !== null && dateB !== null) {
      return dateA - dateB;
    }

    // Сет с датой всегда выше сета с обычным текстом
    if (dateA !== null && dateB === null) {
      return -1;
    }

    if (dateA === null && dateB !== null) {
      return 1;
    }

    // Если у обоих обычный текст — сохраняем исходный порядок
    return 0;
  });

  return (
    <main className="sets-page">
      <div className="container">

        <div className="sets-page-header">
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