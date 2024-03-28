import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import useUser from "./useUser";

const useMessaging = () => {
  const [allMessages, setAllMessages] = useState<string>("");
  const { user } = useUser();
  useEffect(() => {
    fetchAllMessages();
  }, []);

  const sendMessage = async (message: string) => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        message: message,
        time: new Date(),
        sender: user?.displayName,
      });
      console.log(message);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchAllMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "messages"));
      querySnapshot.forEach((doc) => {
        const mesages = `${JSON.stringify(doc.data(), null, 2)}`;
        setAllMessages(mesages);
      });
    } catch (error) {
      console.log("an error occured while fetching data");
    }
  };
  return {
    sendMessage,
    allMessages,
  };
};

export default useMessaging;
