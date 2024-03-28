import { appAuth } from "@/firebaseConfig";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  // fetch user info on mount
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = () => {
    onAuthStateChanged(appAuth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  };
  return {
    user,
  };
};

export default useUser;
