import { collection, addDoc, getDocs, deleteDoc, setDoc, doc, orderBy, query} from "firebase/firestore";
import { db } from "./firebase"

export async function addSlide(reservation) {
    const docRef = await addDoc(collection(db, "slides"), reservation);
    return docRef.id;
}

export async function deleteSlide(slideId) {
    const docRef = doc(db, 'slides', slideId);

    await deleteDoc(docRef);
}

export async function listSlides() { //tentar ordenar por ordem
  console.log("listSlides");
  let retorno;
  const q = query(collection(db, "slides"), orderBy("order"));
  await getDocs(q)
      .then((querySnapshot) => {
          retorno = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      });
  return retorno;
}

export async function updateOrder(slide) {
  const slideId = Object.keys(slide)[0];
  const slideRef = doc(db, 'slides', slideId);
  await setDoc(slideRef, {order: slide[slideId]}, {merge: true});
}