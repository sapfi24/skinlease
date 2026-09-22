// СТАТУСЫ:
// "available" → Доступен
// "rented"    → В аренде
// "tradeban"  → Трейд бан
//statusUntil: "срок до которого сет недоступен"

const sets = [
  {
  slug: "pink",
  name: "Неоново-розовый сет",
  tag: "Идеально для снайпера",
  status: "tradeban",
  statusUntil: "До 20 октября",
  price: "3 250 ₽",
  duration: "6 дней",
  moneyback: "1 500 ₽",

  description:
    "★ Складной нож | Волны (Factory New) + ★ Спортивные перчатки | Порок (Field-Tested)",

  value: "≈ 71 200 ₽",

  items: [
  "★ Flip Knife | Doppler Phase 2 (Factory New)",
  "★ Sport Gloves | Vice (Field-Tested)",
  "Desert Eagle | Mulberry (Minimal Wear)",
],

  images: [
    "/sets/pink/1.jpg",
    "/sets/pink/2.jpg",
    "/sets/pink/3.jpg",
    "/sets/pink/4.jpg"
  ]
},

  {
    slug: "omega",
    name: "Омега сет",
    tag: "NEW",
    status: "available",
    price: "3 250 ₽",
    duration: "6 дней",
    moneyback: "1 500 ₽",

    description:
      "★ Штык-нож М9 | Зуб тигра (Factory New) + ★ Спортивные перчатки | Омега (Field-Tested)",

    value: "≈ 73 400 ₽",

    items: [
      "★ Штык-нож М9 | Зуб тигра (Factory New)",
      "★ Спортивные перчатки | Омега (Field-Tested)",
    ],

    images: [
      "/sets/omega/1.jpg",
      "/sets/omega/2.jpg",
      "/sets/omega/3.jpg",
      "/sets/omega/4.jpg"
    ]
  },

  {
    slug: "blue",
    name: "Синий сет",
    tag: "С готовым инвентарём",
    status: "available",
    price: "3 500 ₽",
    duration: "6 дней",
    moneyback: "1 500 ₽",

    description:
      "★ Нож-бабочка | Чистая вода (MW) + ★ Мотоциклетные перчатки | Полигон (FT)",

    value: "≈ 72 150 ₽",

    items: [
      "★ Нож-бабочка | Чистая вода",
      "★ Мотоциклетные перчатки | Полигон",
      "AWP | Солнце в знаке Льва",
      "M4A1-S | Ночной кошмар",
      "M4A4 | Безлюдный космос",
      "StatTrak™ Glock-18 | Пришелец",
      "StatTrak™ MAC-10 | Океанские мотивы",
      "StatTrak™ Desert Eagle | Синяя фанера",
      "Zeus x27 | Электрическая синь",
      "Автомат «Галиль» | Холодный синтез",
      "MP9 | Синий буйвол",
      "FAMAS | Йети-камуфляж",
      "USP-S | Горный камуфляж",
      "MP7 | Перистое облако",
      "Dual Berettas | Синий кварц",
    ],

    images: [
      "/sets/blue/1.jpg",
      "/sets/blue/2.jpg",
      "/sets/blue/3.jpg",
      "/sets/blue/4.jpg"
    ]
  },

  {
    slug: "snow",
    name: "Снежный сет",
    status: "tradeban",
    statusUntil: "До 5 октября",
    tag: "Идеально чистый",
    price: "2 700 ₽",
    moneyback: "1 300 ₽",
    duration: "6 дней",

    description:
      "★ Коготь + ★ Перчатки спецназа | Капитан 3-го ранга (Minimal Wear)",

    value: "≈ 43 750 ₽",

    items: [
      "★ Коготь",
      "Перчатки спецназа | Капитан 3-го ранга (Minimal Wear)",
    ],

    images: [
      "/sets/snow/1.jpg",
      "/sets/snow/2.jpg",
      "/sets/snow/3.jpg",
      "/sets/snow/4.jpg"
    ]
  },
  {
    slug: "darkblue",
    name: "Тёмно-синий сет",
    tag: "С дополнительными скинами",
    status: "available",
    price: "2 250 ₽",
    duration: "6 дней",
    moneyback: "1 250 ₽",

    description:
      "★ Скелетный нож | Вороненая сталь (Minimal Wear) + ★ Перчатки спецназа | Полевой агент (Field-Tested)",

    value: "≈ 36 860 ₽",

    items: [
      "★ Скелетный нож | Вороненая сталь",
      "★ Перчатки спецназа | Полевой агент",
      "M4A1-S | Помой меня пж",
      "USP-S | Бесшумный выстрел",
      "Desert Eagle | Недовольство",
      "M4A4 | Рваный морской камуфляж",
      "StatTrak™ SSG 08 | Мейнфрейм 001",
      "Glock-18 | Океаническая топография",
      "MP9 | Синий буйвол",
      "SG 553 | Ночной камуфляж",
    ],

    images: [
      "/sets/darkblue/1.jpg",
      "/sets/darkblue/2.jpg",
      "/sets/darkblue/3.jpg",
      "/sets/darkblue/4.jpg",
    ]
  },
];

export default sets;
