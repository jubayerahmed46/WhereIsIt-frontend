import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../api/firebase/firebase.config";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      if (currentUser) {
        //    something will do
      }

      setLoading(false);
    });

    return () => unSubs();
  }, []);

  const signUpWithEmailAndPass = async (email, pass) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, pass);
  };

  const loginWithEmailAndPass = async (email, pass) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, pass);
  };

  const signinWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    return await signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    signUpWithEmailAndPass,
    loginWithEmailAndPass,
    signinWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
