import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage için varsayılan depolama
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice";

// Redux Persist yapılandırması
const persistConfig = {
  key: "root", // Depolama anahtarı
  storage, // Kullanılacak depolama mekanizması (localStorage)
  // whitelist: ["auth"], // Sadece 'auth' reducer'ını kalıcı hale getir
};

// Persist reducer oluştur
const persistedReducer = persistReducer(persistConfig, authReducer);

// Store'u oluştur
const store = configureStore({
  reducer: {
    auth: persistedReducer, // Persist edilmiş reducer'ı kullan
    stock: stockReducer
  },
  devTools: process.env.NODE_ENV !== "production", // Geliştirme ortamında Redux DevTools'u etkinleştir
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Redux Persist'in action'ları için serializableCheck'i devre dışı bırak
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Persistor'u oluştur
export const persistor = persistStore(store);

export default store;
