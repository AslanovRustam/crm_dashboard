import { companyList } from "@/data/data";
import { ICompany, IPromo } from "@/types/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items: companyList,
  currentCompany: null,
};

type AddPromoPayload = [number, IPromo];
type UpdCompanyPayload = [number, ICompany];

export const companiesSlice = createSlice({
  name: "companies",

  initialState: initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<ICompany>) => {
      state.items = [...state.items, action.payload];
    },
    addPromoToCompany: (state, action: PayloadAction<AddPromoPayload>) => {
      const [companyId, promo] = action.payload;
      state.items = state.items.map((item) =>
        item.id === companyId
          ? { ...item, promo: [...item.promo, promo] }
          : item
      );
    },
    updateCompanyInfo: (state, action: PayloadAction<UpdCompanyPayload>) => {
      const [companyId, updatedCompany] = action.payload;
      state.items = state.items.map((item) =>
        item.id === companyId ? updatedCompany : item
      );
    },
    deleteCompany: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addCompany,
  addPromoToCompany,
  updateCompanyInfo,
  deleteCompany,
} = companiesSlice.actions;

export default companiesSlice.reducer;
