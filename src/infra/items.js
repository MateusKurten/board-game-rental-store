// import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
// import { db } from "./firebase"

// export async function addReservation(reservation) {
//     console.log("Executando addReservations");
//     console.log(reservation);

//     const docRef = await addDoc(collection(db, "reservations"), reservation);
//     return docRef.id;
// }

// export async function deleteReservation(reservationId) {
//     console.log("Executando deleteReservations");
//     const docRef = doc(db, 'reservations', reservationId);
//     console.log(docRef);

//     await deleteDoc(docRef);
// }

// export async function listReservations() {
//     console.log("Executando listReservations");
//     let r;
//     await getDocs(collection(db, "reservations"))
//         .then((querySnapshot) => {
//             r = querySnapshot.docs.reduce((group, doc) => {
//                 const { day } = doc.data();
//                 group[day] = group[day] ?? [];
//                 group[day].push({ ...doc.data(), id: doc.id })
//                 return group;  
//             }, {})
//         });
        
//     return r;
// }
