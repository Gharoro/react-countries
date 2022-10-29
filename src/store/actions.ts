import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import countryService from "../service/countryService";
import { ICountry, IFilterCountry } from "../types/redux-types";
import { RootState } from "./index";
import countrySlice from "./slice";

const countryActions = countrySlice.actions;

export const fetchCountries = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().country.countries.length === 0) {
      const response: ICountry[] = await countryService.getAllCountries();
      dispatch(countryActions.setCountries(response));
    }
  };
};

export const filterCountries = (
  region: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response: IFilterCountry[] =
      await countryService.getRegionalCountries(region);
    dispatch(countryActions.setRegionalCountries(response));
  };
};

export const searchCountries = (
  name: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response: IFilterCountry[] = await countryService.getSearchCountries(
      name
    );
    dispatch(countryActions.setSearchCountries(response));
  };
};

export const fetchCountry = (
  country_name: string | undefined
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    if (country_name) {
      const response: ICountry = await countryService.getCountry(country_name);
      dispatch(countryActions.setCountry(response));
    }
  };
};
