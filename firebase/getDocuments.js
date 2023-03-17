import { db } from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

async function getDocuments(docName) {
    try {
        const snapshot = docName === "user" ? await getDocs(collection(db, docName)) : await getDocs(query(collection(db, docName), orderBy("index", "asc")))
        const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return documents;
      } catch (error) {
        console.error("Error retrieving Firestore documents:", error);
        return [];
      }
}

export default getDocuments