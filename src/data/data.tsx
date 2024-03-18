import { Category, Promotion, Status } from "@/types/interface";
import Logo from "../../public/companyLogo.svg";

export const stats = [
  { id: 0, text: "Total promotions", count: 432 },
  { id: 1, text: "Total category", count: 8 },
  { id: 2, text: "New companies", count: 28 },
  { id: 3, text: "Total active companies", count: 45 },
];

export const companySalesTitles = {
  first: "Company",
  second: "Sold",
  third: "Income",
};

export const companySales = [
  {
    id: 0,
    // logo: <Logo  />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
];

export const countries = [
  { id: 0, name: "Canada", count: 2 },
  { id: 1, name: "USA", count: 4 },
  { id: 2, name: "Italia", count: 7 },
  { id: 3, name: "Ukraine", count: 2 },
  { id: 4, name: "Spain", count: 3 },
];

export const promotionsTitles = {
  first: "Company",
  second: "Name",
  third: "%",
};

export const promotions = [
  {
    id: 0,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-40%",
  },
  {
    id: 1,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-25%",
  },
  {
    id: 2,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-5%",
  },
  {
    id: 3,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-24%",
  },
  {
    id: 4,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-80%",
  },
  {
    id: 5,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-10%",
  },
  {
    id: 6,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-80%",
  },
];

export const companyList = [
  {
    id: 0,
    category: Category.products,
    name: "First Wholesale",
    status: Status.active,
    promotion: Promotion.yes,
    country: "USA",
    data: "2024-02-28",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    promo: [
      {
        id: 0,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 4,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 1,
        percent: "25",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        percent: "10",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: 1,
    category: Category.supplies,
    name: "Second Wholesale",
    status: Status.notActive,
    promotion: Promotion.no,
    country: "USA",
    data: "2024-02-28",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    promo: [
      {
        id: 0,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: 2,
    category: Category.technology,
    name: "Third Wholesale",
    status: Status.suspended,
    promotion: Promotion.yes,
    country: "USA",
    data: "2024-02-28",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    promo: [
      {
        id: 0,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        percent: "10",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        percent: "15",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: 3,
    category: Category.products,
    name: "Fourth Wholesale",
    status: Status.pending,
    promotion: Promotion.yes,
    country: "USA",
    data: "2024-02-28",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    promo: [],
  },
  {
    id: 4,
    category: Category.technology,
    name: "Fifth Wholesale",
    status: Status.notActive,
    promotion: Promotion.yes,
    country: "USA",
    data: "2024-02-28",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    promo: [
      {
        id: 0,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 1,
        percent: "25",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: 5,
    category: Category.supplies,
    name: "Sixth Wholesale",
    status: Status.suspended,
    promotion: Promotion.yes,
    country: "USA",
    data: "2024-02-28",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    promo: [
      {
        id: 0,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 4,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 1,
        percent: "25",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        percent: "10",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        percent: "15",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: 6,
    category: Category.technology,
    name: "Seventh Wholesale",
    status: Status.pending,
    promotion: Promotion.no,
    country: "USA",
    data: "2024-02-28",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    promo: [],
  },
  {
    id: 7,
    category: Category.products,
    name: "Eighth Wholesale",
    status: Status.active,
    promotion: Promotion.yes,
    country: "USA",
    data: "2024-02-28",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    promo: [
      {
        id: 0,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 4,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        percent: "15",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: 8,
    category: Category.products,
    name: "Ninth Wholesale",
    status: Status.notActive,
    promotion: Promotion.no,
    country: "USA",
    data: "2024-02-28",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    promo: [
      {
        id: 0,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 4,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 1,
        percent: "25",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        percent: "10",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        percent: "15",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: 9,
    category: Category.supplies,
    name: "Tenth Wholesale",
    status: Status.active,
    promotion: Promotion.no,
    country: "USA",
    data: "2024-02-28",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    promo: [
      {
        id: 0,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  {
    id: 10,
    category: Category.supplies,
    name: "Eleventh Wholesale",
    status: Status.pending,
    promotion: Promotion.yes,
    country: "USA",
    data: "2024-02-28",
    text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    promo: [
      {
        id: 0,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 4,
        percent: "20",
        name: "Discount on this product",
        text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
];

export const currentCompanyDefault = {
  id: 100,
  category: Category.supplies,
  name: "Twelfth Wholesale",
  status: Status.pending,
  promotion: Promotion.yes,
  country: "USA",
  data: "2024-02-28",
  text: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  promo: [
    {
      id: 0,
      percent: "20",
      name: "Discount on this product",
      text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      percent: "20",
      name: "Discount on this product",
      text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 1,
      percent: "25",
      name: "Discount on this product",
      text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      percent: "10",
      name: "Discount on this product",
      text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      percent: "15",
      name: "Discount on this product",
      text: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};
