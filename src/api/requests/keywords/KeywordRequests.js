import { db } from "../../../auth/firebase/firebase";
import {
  collection,
  doc,
  query,
  where,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const keywordsCollection = "keywords";

export async function getKeywords() {
  const querySnapshot = await getDocs(collection(db, keywordsCollection));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getKeywordById(id) {
  const docRef = doc(db, keywordsCollection, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("No such keyword.");
  }
}

export async function getKeywordsByArmyId(id) {
  const keywordsQuery = query(
    collection(db, keywordsCollection),
    where("idArmy", "==", id)
  );
  const querySnapshot = await getDocs(keywordsQuery);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getUniversalKeywords() {
  const querySnapshot = await getDocs(
    collection(db, keywordsCollection).where("idArmy", "==", 0)
  );
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function postKeyword(keyword) {
  const docRef = await addDoc(collection(db, keywordsCollection), keyword);
  return { id: docRef.id, ...keyword };
}

export async function putKeyword(id, keyword) {
  const docRef = doc(db, keywordsCollection, id);
  await updateDoc(docRef, keyword);
  return { id, ...keyword };
}

export async function deleteKeyword(id) {
  const docRef = doc(db, keywordsCollection, id);
  await deleteDoc(docRef);
}
