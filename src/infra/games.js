import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase"

export async function addGame(reservation) {
    console.log("Executando addGame");
    console.log(reservation);

    const docRef = await addDoc(collection(db, "games"), reservation);
    return docRef.id;
}

// export async function deleteReservation(reservationId) {
//     console.log("Executando deleteReservations");
//     const docRef = doc(db, 'reservations', reservationId);
//     console.log(docRef);

//     await deleteDoc(docRef);
// }

export async function listGames() {
  console.log("listGames");
  let retorno;
  await getDocs(collection(db, "games"))
      .then((querySnapshot) => {
          retorno = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      });
  return retorno;
}
