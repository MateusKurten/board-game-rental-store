import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export async function addGame(game) {
    const docRef = await addDoc(collection(db, "games"), game);
    return docRef.id;
}

export async function deleteGame(gameId) {
    const docRef = doc(db, 'games', gameId);

    await deleteDoc(docRef);
}

export async function listGames() {
  let r;
  await getDocs(collection(db, "games"))
      .then((querySnapshot) => {
          r = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      });
  return r;
}
