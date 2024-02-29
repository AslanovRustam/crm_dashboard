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
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    sold: 459,
    income: "$600",
  },
  {
    id: 0,
    logo: <Logo style={{ width: "1.4em" }} />,
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
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-40%",
  },
  {
    id: 1,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-25%",
  },
  {
    id: 2,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-5%",
  },
  {
    id: 3,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-24%",
  },
  {
    id: 4,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-80%",
  },
  {
    id: 5,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-10%",
  },
  {
    id: 6,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    promoName: "Norem ipsum dolor ",
    percent: "-80%",
  },
];

export const companyList = [
  {
    id: 0,
    category: Category.products,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    status: Status.active,
    promotion: Promotion.yes,
    country: "USA",
    data: "19.02.2023",
  },
  {
    id: 1,
    category: Category.supplies,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    status: Status.notActive,
    promotion: Promotion.no,
    country: "USA",
    data: "19.02.2023",
  },
  {
    id: 2,
    category: Category.technology,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    status: Status.suspended,
    promotion: Promotion.yes,
    country: "USA",
    data: "19.02.2023",
  },
  {
    id: 3,
    category: Category.products,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    status: Status.pending,
    promotion: Promotion.yes,
    country: "USA",
    data: "19.02.2023",
  },
  {
    id: 4,
    category: Category.technology,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    status: Status.notActive,
    promotion: Promotion.yes,
    country: "USA",
    data: "19.02.2023",
  },
  {
    id: 5,
    category: Category.supplies,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    status: Status.suspended,
    promotion: Promotion.yes,
    country: "USA",
    data: "19.02.2023",
  },
  {
    id: 6,
    category: Category.technology,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    status: Status.pending,
    promotion: Promotion.no,
    country: "USA",
    data: "19.02.2023",
  },
  {
    id: 7,
    category: Category.products,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    status: Status.active,
    promotion: Promotion.yes,
    country: "USA",
    data: "19.02.2023",
  },
  {
    id: 8,
    category: Category.products,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    status: Status.notActive,
    promotion: Promotion.no,
    country: "USA",
    data: "19.02.2023",
  },
  {
    id: 9,
    category: Category.supplies,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    status: Status.active,
    promotion: Promotion.no,
    country: "USA",
    data: "19.02.2023",
  },
  {
    id: 10,
    category: Category.supplies,
    logo: <Logo style={{ width: "1.4em" }} />,
    name: "Costco Wholesale",
    status: Status.pending,
    promotion: Promotion.yes,
    country: "USA",
    data: "19.02.2023",
  },
];
