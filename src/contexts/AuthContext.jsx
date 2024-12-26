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
import useAxiosInstance from "../hooks/useAxiosInstance";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const instance = useAxiosInstance();

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      const token = document.cookie;
      if (currentUser) {
        if (!token) {
          // console.log(
          //   "login and create access token. user :",
          //   currentUser.email
          // );
          const user = { email: currentUser.email };
          instance.post(`/create-jwt`, user).then((res) => {
            console.log(res.data);
          });
        }
      } else {
        if (token) {
          // console.log("logout and remove access token");
          instance.post(`/remove-jwt`, {});
        }
      }

      setLoading(false);
    });

    return () => unSubs();
  }, [instance]);

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
