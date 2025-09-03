import kebabsImage from "../assets/mini_kebabs.jpg";
import eggplantRolls from "../assets/eggplant_rolls.jpg";
import snacks from "../assets/snacks.jpg";
import bruschetta from "../assets/bruschetta_hearty.jpg";
import miniCrostini from "../assets/mini_crostini.jpg";
import bacheloretteBox from "../assets/bachelorette_party_box.jpg";
import saladBox from "../assets/salad_box.jpg";
import premiumBurgers from "../assets/premium_burger.jpg";
import croissants from "../assets/croissants.jpg";
import kidsBox from "../assets/kids_box.jpg";
import miniBurger from "../assets/mini_burger.jpg";
import partyRolls from "../assets/party_rolls.jpg";

export const products = [
  {
    id: 0,
    title: "Мини шашлычки",
    description:
      "Нежные кусочки куриного шашлыка, завернутые в мягкую лепешку со свежими помидорами и душистой зеленью.",
    price: "300",
    image: kebabsImage,
    category: ["Мини-закуски на шпажках"],
  },
  {
    id: 1,
    title: "Баклажановые рулетики",
    description:
      "Нежные ломтики баклажана, свернутые в аккуратные рулетики на шпажке.",
    price: "160",
    image: eggplantRolls,
    category: ["Мини-закуски на шпажках"],
  },
  {
    id: 2,
    title: "Закусочные",
    description:
      "Сытные мини-сэндвичи, пикантные шашлычки из ветчины с сыром и сочным томатом, изысканные канапе с рыбой на черном хлебе и нежные рулетики из ветчины.",
    price: "3500",
    image: snacks,
    category: ["Наборы для вечеринок"],
  },
  {
    id: 3,
    title: "Брускетты сытные",
    description:
      "В этом наборе мы объединили самые популярные брускетты — от классической с ветчиной до изысканной с креветками. Хрустящая основа и щедрые начинки подарят наслаждение в каждом укусе.",
    price: "4500",
    image: bruschetta,
    category: ["Наборы для вечеринок", "Европейский стиль"],
  },
  {
    id: 4,
    title: "Мини кростини",
    description:
      "Откройте для себя изысканное сочетание хрустящих мини-гренок и изысканных топпингов! В этом наборе вас ждут нежные креветки, классика из красной рыбы со свежим огурцом, а также неожиданные и яркие десертные варианты",
    price: "3100",
    image: miniCrostini,
    category: ["Наборы для вечеринок", "Европейский стиль"],
  },
  {
    id: 5,
    title: "Бокс девичник",
    description:
      "Изысканные закуски для вашего праздника! Хрустящие креветки в кляре, нежные рулетики из красной рыбы с редисом и элегантные тарталетки с красной икрой. Легко, вкусно и по-настоящему празднично — идеально для девичника!",
    price: "4900",
    image: bacheloretteBox,
    category: ["Наборы для вечеринок"],
  },
  {
    id: 6,
    title: "Бокс салатов",
    description:
      "В этом боксе собраны четыре любимых салата: нежная «Селедка под шубой», сытный «Цезарь», традиционный «Оливье» и свежий «Греческий»",
    price: "4500",
    image: saladBox,
    category: ["Наборы для вечеринок"],
  },
  {
    id: 7,
    title: "Бургер Премиум",
    description:
      "Сочная куриная котлета в хрустящей панировке, нежный сыр, свежий салат и аппетитный соус на мягкой булочке.",
    price: "250",
    image: premiumBurgers,
    category: ["Бургеры и сэндвичи"],
  },
  {
    id: 8,
    title: "Круассаны с карпаччо из индейки",
    description:
      "Нежное карпаччо из индейки, ломтик сыра и свежий салат в хрустящем круассане. Изысканное сочетание вкусов для идеального перекуса с европейским шармом.",
    price: "200",
    image: croissants,
    category: ["Европейский стиль"],
  },
  {
    id: 9,
    title: "Kids box",
    description:
      "Веселый и вкусный обед для маленьких гурманов! В наборе: милые мини-бургеры, хрустящие наггетсы, а также свежие фрукты, ягоды и овощи. Ярко, полезно и точно порадует вашего ребенка!",
    price: "4900",
    image: kidsBox,
    category: ["Для детей"],
  },
  {
    id: 10,
    title: "Мини бургеры",
    description:
      "Яркий и аппетитный мини-бургер с сочной куриной котлетой, свежим салатом и пикантным соусом в необычной зеленой булочке!",
    price: "200",
    image: miniBurger,
    category: ["Бургеры и сэндвичи", "Для детей"],
  },
  {
    id: 11,
    title: "Праздничные рулеты",
    description: "",
    price: "3500",
    image: partyRolls,
    category: ["Мини-закуски на шпажках"],
  },
];

export const categories = [
  "Все категории",
  "Мини-закуски на шпажках",
  "Наборы для вечеринок",
  "Европейский стиль",
  "Бургеры и сэндвичи",
  "Для детей",
];
