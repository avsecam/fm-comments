import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      app: slice,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
