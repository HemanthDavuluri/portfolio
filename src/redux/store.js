import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configSlice";

export default configureStore({
  reducer: {
    config: configSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
