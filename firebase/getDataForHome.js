import { db } from "@/firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";

async function getUserData() {
    try {
        const snapshot = await getDocs(collection(db, "user"))
        const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return documents;
      } catch (error) {
        console.error("Error retrieving Firestore documents:", error);
        throw new Error(error)
      }
}

async function getSocialLinks() {
    try {
        const snapshot = await getDocs(query(collection(db, "socialLink"), orderBy("index", "asc")))
        const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return documents;
      } catch (error) {
        console.error("Error retrieving Firestore documents:", error);
        throw new Error(error)
      }
}

async function getProjectsData() {
    try {
        const snapshot = await getDocs(query(collection(db, "projects"), orderBy("index", "asc"), limit(6)))
        const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return documents;
      } catch (error) {
        console.error("Error retrieving Firestore documents:", error);
        throw new Error(error)
      }
}

export {getProjectsData, getUserData, getSocialLinks}