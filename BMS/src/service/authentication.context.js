import React, { useState, createContext, useEffect } from "react";
import { signOut, createUserWithEmailAndPassword, onAuthStateChanged, getAuth } from "firebase/auth";
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usr) => {
            if (usr) {
                setUser(usr);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.message);
            });
    };

    const onRegister = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((u) => {
                setUser(u);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.message);
            });
    };

    const onLogout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser(null);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsLoading(false);
                setError(e.message);
            });
    };

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
