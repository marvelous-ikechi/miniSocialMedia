import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useRouter } from "expo-router";
import { appAuth } from "@/firebaseConfig";
interface SignupParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const useAuth = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const { navigate } = useRouter();

  const signup = async ({
    email,
    password,
    firstName,
    lastName,
  }: SignupParams) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
      console.log(
        "User account created & signed in with display name:",
        user.displayName
      );
      navigate("/(tabs)/Home");
    } catch (error: any) {
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
    } finally {
      setLoading(false);
    }
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
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      // Redirect user to login page after logout
      navigate("/(auth)/Login");
    } catch (error) {
      setError("Error signing out");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    signup,
    login,
    loading,
    error,
    logout,
  };
};

export default useAuth;
