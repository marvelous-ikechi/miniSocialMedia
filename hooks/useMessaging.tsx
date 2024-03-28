import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const useMessaging = () => {
  const [allMessages, setAllMessages] = useState<string>("");
  useEffect(() => {
    fetchAllMessages();
  }, []);

  const sendMessage = async (message: string) => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        message: message,
        time: new Date(),
        sender: "",
        uid: "",
      });
      console.log(message);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchAllMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        const mesages = `${doc.id} => ${doc.data()}`;
        setAllMessages(mesages);
      });
    } catch (error) {
      console.log("an error occured while fetching data");
    }
  };
  return {
    sendMessage,
    fetchAllMessages,
  };
};

export default useMessaging;
