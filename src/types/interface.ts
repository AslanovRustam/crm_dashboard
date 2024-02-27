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
