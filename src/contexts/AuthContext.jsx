import { createContext, useContext, useState } from "react";
import { database } from "../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();
function AuthProvider({ children }) {
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState();

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  });

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(database, email, password);
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(database, email, password);
  };

  const userSignOut = () => {
    signOut(database);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userSignOut,
        signup,
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth was used outside of the AuthProvider");
  return context;
};

export { AuthProvider, useAuth };
