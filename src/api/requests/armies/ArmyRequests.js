import { db } from "../../../auth/firebase/firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const armiesCollection = "armies";

export async function getArmies() {
  const querySnapshot = await getDocs(collection(db, armiesCollection));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getArmyById(id) {
  const docRef = doc(db, armiesCollection, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("No such army.");
  }
}

export async function postArmy(army) {
  const docRef = await addDoc(collection(db, armiesCollection), army);
  return { id: docRef.id, ...army };
}

export async function putArmy(id, army) {
  const docRef = doc(db, armiesCollection, id);
  await updateDoc(docRef, army);
  return { id, ...army };
}

export async function deleteArmy(id) {
  const docRef = doc(db, armiesCollection, id);
  await deleteDoc(docRef);
}
