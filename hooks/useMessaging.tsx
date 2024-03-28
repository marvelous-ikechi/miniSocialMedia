import { db } from "@/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import useUser from "./useUser";

const useMessaging = () => {
  const [allMessages, setAllMessages] = useState<DocumentData[]>([]);
  const { user } = useUser();
  useEffect(() => {
    fetchAllMessages();
  }, []);

  useEffect(() => {
    // Create a query that orders messages by time in descending order
    const messagesQuery = query(
      collection(db, "messages"),
      orderBy("time", "desc")
    );
    // Listen for real-time updates to the ordered messages
    const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
      const messagesArray: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        const message = doc.data();
        messagesArray.push(message);
      });
      setAllMessages(messagesArray);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const sendMessage = async (message: string) => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        message: message,
        time: new Date(),
        sender: user?.displayName,
        senderUid: user?.uid,
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
      const messagesArray: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        const message = doc.data(); // Get the message data
        messagesArray.push(message); // Add the message to the array
      });
      setAllMessages(messagesArray); // Set the state with the array of messages
    } catch (error) {
      console.log("An error occurred while fetching data:", error);
    }
  };
  return {
    sendMessage,
    allMessages,
  };
};

export default useMessaging;
