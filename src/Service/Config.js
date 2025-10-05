import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, writeBatch } from "firebase/firestore"; // Asegúrate de importar writeBatch si vas a usar subirProductos


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tiendadrecor.firebaseapp.com",
  projectId: "tiendadrecor",
  storageBucket: "tiendadrecor.firebasestorage.app",
  messagingSenderId: "11735407161",
  appId: "1:11735407161:web:0dcba049f057faea514be8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const getProductos = async () => {
    const productsRef = collection(db, "comics");
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getUnProducto = async (id) => {
    const productRef = doc(db, "comics", id);
    const docSnap = await getDoc(productRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        console.log("¡No existe tal documento!");
        return null;
    }
};

export const getProductosPorCategoria = async (idCategoria) => {
    const productsRef = collection(db, "comics");
    const q = query(productsRef, where("idCat", "==", idCategoria));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};