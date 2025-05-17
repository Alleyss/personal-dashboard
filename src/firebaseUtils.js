import { db } from './firebase';  // Correctly import the Firestore instance
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy } from "firebase/firestore";

// Add a task to Firebase
export const addTaskToFirebase = async (task) => {
    try {
      await addDoc(collection(db, 'tasks'), {
        task,
        timestamp: serverTimestamp(),  // Use serverTimestamp() from firestore
      });
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };
  
  // Fetch tasks from Firebase
  export const fetchTasksFromFirebase = async () => {
    const tasksSnapshot = await getDocs(query(collection(db, 'tasks'), orderBy('timestamp', 'desc')));
    return tasksSnapshot.docs.map(doc => doc.data());
  };