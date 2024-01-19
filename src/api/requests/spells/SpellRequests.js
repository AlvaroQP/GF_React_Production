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

const spellsCollection = "spells";

export async function getSpells() {
  const querySnapshot = await getDocs(collection(db, spellsCollection));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getSpellById(id) {
  const docRef = doc(db, spellsCollection, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("No such spell.");
  }
}

export async function getSpellsByArmyId(id) {
  const spellsQuery = query(
    collection(db, spellsCollection),
    where("idArmy", "==", id)
  );
  const querySnapshot = await getDocs(spellsQuery);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function postSpell(spell) {
  const docRef = await addDoc(collection(db, spellsCollection), spell);
  return { id: docRef.id, ...spell };
}

export async function putSpell(id, spell) {
  const docRef = doc(db, spellsCollection, id);
  await updateDoc(docRef, spell);
  return { id, ...spell };
}

export async function deleteSpell(id) {
  const docRef = doc(db, spellsCollection, id);
  await deleteDoc(docRef);
}
