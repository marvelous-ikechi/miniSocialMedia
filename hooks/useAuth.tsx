import { useState } from "react";
import auth from "@react-native-firebase/auth";

interface SignupParams {
  email: string;
  password: string;
}

const useAuth = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = (params: SignupParams) => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(params.email, params.password)
      .then(() => {
        console.log("User account created & signed in!");
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

  return {
    signup,
    loading,
    error,
  };
};

export default useAuth;
