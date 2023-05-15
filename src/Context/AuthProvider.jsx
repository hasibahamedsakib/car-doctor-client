import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(true);

  const userSignUp = (email, password) => {
    setError(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setError(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setError(false);
    });

    return () => {
      return unsubscribe();
    };
  });

  const authInfo = { user, error, userSignUp, userLogin, userLogOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
