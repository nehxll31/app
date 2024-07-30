import "react-native-gesture-handler";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { CartProvider } from "./src/context/CartContext";
import { AuthenticationContextProvider } from "./src/service/authentication.context";
import { Navigation } from "./src/navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from "./src/utils/colors";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcO_aUMPMOoWvMuIgf9jsR4iw5pioW2t8",
  authDomain: "bms-v-k.firebaseapp.com",
  projectId: "bms-v-k",
  storageBucket: "bms-v-k.appspot.com",
  messagingSenderId: "180675063648",
  appId: "1:180675063648:web:9375c9542411425a837805",
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase Auth and set persistence
let auth;
try {
  auth = getAuth(app);
} catch (error) {
  if (error.code === 'auth/already-initialized') {
    auth = getAuth();
  } else {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage)
    });
  }
}

// Initialize Firestore
const firestore = getFirestore(app);

const App = () => {
  return (
    <PaperProvider>
      <CartProvider>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </CartProvider>
    </PaperProvider>
  );
};

export default App;
