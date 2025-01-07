// import {configureStore} from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import rootReducer from "./reducers";

// const middlewares = process.env.NODE_ENV !== "production" && logger;

// const store = configureStore({
//   reducer: rootReducer,
//   // preloadedState:{},
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(middlewares),
//   devTools: process.env.NODE_ENV !== "production",
// });

// export default store;

// filepath: /D:/cloth_Branding/MERN-Ecommerce/client/src/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
