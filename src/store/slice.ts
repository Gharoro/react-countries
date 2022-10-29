import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountry, ICountryList, IFilterCountry } from "../types/redux-types";

const initialState: ICountryList = {
  countries: [],
  regionalCountries: [],
  country: null,
  loading: true,
  isFilter: false,
};

const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    setCountries(state, action: PayloadAction<ICountry[]>) {
      state.countries = action.payload;
      state.loading = false;
      state.isFilter = false;
    },
    setCountry(state, action: PayloadAction<ICountry>) {
      state.country = action.payload;
      state.loading = false;
    },
    setRegionalCountries(state, action: PayloadAction<IFilterCountry[]>) {
      state.regionalCountries = action.payload;
      state.loading = false;
      state.isFilter = true;
    },
    setSearchCountries(state, action: PayloadAction<IFilterCountry[]>) {
      state.regionalCountries = action.payload;
      state.loading = false;
      state.isFilter = true;
    },
  },
});

export default countrySlice;
