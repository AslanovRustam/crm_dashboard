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
export interface ICompany {
  id: number;
  category: string;
  logo: ReactElement;
  name: string;
  status: string;
  promotion: string;
  country: string;
  data: string;
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
