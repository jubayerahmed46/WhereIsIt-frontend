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
import axios from "axios";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);

      const token = document.cookie;
      if (currentUser) {
        if (!token) {
          // console.log(
          //   "login and create access token. user :",
          //   currentUser.email
          // );
          const user = { email: currentUser.email };
          axios
            .post(`${import.meta.env.VITE_API_URL}/create-jwt`, user, {
              withCredentials: true,
            })
            .then((res) => {
              console.log(res.data);
            });
        }
      } else {
        if (token) {
          // console.log("logout and remove access token");
          axios.delete(
            `${import.meta.env.VITE_API_URL}/remove-jwt`,
            {},
            {
              withCredentials: true,
            }
          );
        }
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
