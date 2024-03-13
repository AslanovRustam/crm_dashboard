import { companyList } from "@/data/data";
import { ICompany, IPromo } from "@/types/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  items: companyList,
};

type AddPromoPayload = [number, IPromo];

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
          ? { ...item, promo: [...item.promo, promo] } // Добавление нового объекта promo в массив promo конкретной компании
          : item
      );
    },
  },
});

export const { addCompany, addPromoToCompany } = companiesSlice.actions;

export default companiesSlice.reducer;
