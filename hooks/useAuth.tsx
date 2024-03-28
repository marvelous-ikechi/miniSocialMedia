import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "expo-router";
interface SignupParams {
  email: string;
  password: string;
}

const useAuth = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const { navigate } = useRouter();

  const signup = (params: SignupParams) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, params.email, params.password)
      .then(() => {
        console.log("User account created & signed in!");
        navigate("/(tabs)/Home");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
          setError("That email address is already in use!");
        } else if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
          setError("That email address is invalid!");
        } else {
          console.error(error);
          setError("An unexpected error occurred.");
        }
      })
      .finally(() => setLoading(false));
  };

  const login = (params: SignupParams) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, params.email, params.password)
      .then(() => {
        navigate("/(tabs)/Home");
        console.log("User logged in!");
      })
      .catch((error) => {
        setError("Login error experienced");
      })
      .finally(() => setLoading(false));
  };

  return {
    signup,
    login,
    loading,
    error,
  };
};

export default useAuth;
