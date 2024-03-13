import { createSelector } from "@reduxjs/toolkit";
import { ICompany } from "@/types/interface";
import { RootState } from "./store";

export const selectCompanies = (state: RootState): ICompany[] =>
  state.companies.items;

export const selectFilter = (state: RootState): string => state.filter;

export const selectFilteredCompanies = createSelector(
  [selectCompanies, selectFilter],
  (companies, filter) => {
    return companies.filter(
      (item) =>
        item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        item.text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);
