import { ReactElement } from "react";

export interface IStat {
  id: number;
  text: string;
  count: number;
}

export interface ICompanySales {
  id: number;
  logo: ReactElement;
  name: string;
  sold?: number;
  income?: string;
  promoName?: string;
  percent?: string;
}

export interface ICountries {
  id: number;
  count: number;
  name: string;
}
export interface ITitles {
  first: string;
  second: string;
  third: string;
}

export interface IPromo {
  id: number;
  name: string;
  percent: string;
  text: string;
}
export interface ICompany {
  id: number;
  category: string;
  logo: ReactElement;
  name: string;
  status: string;
  promotion: string;
  country: string;
  data: string;
  promo: IPromo[];
  text: string;
}
export enum Status {
  active = "active",
  notActive = "notActive",
  pending = "pending",
  suspended = "suspended",
}
export enum Promotion {
  yes = "Yes",
  no = "No",
}
export enum Category {
  products = "Products",
  supplies = "Supplies",
  technology = "Technology",
}

export interface IPromotionData {
  id: number;
  percent: string;
  name: string;
  text: string;
}
export interface IFormValues {
  name: string;
  percent: string;
  text: string;
}
