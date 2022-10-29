import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./slice";

const store = configureStore({
  reducer: { country: countrySlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
