import { getDatabase, ref, set , get } from "firebase/database";
import products from "../product-data";

// export default function writeUserData(productID) {
//   const db = getDatabase();
//   set(ref(db, 'products/' + productID), {
//     nombre: "fede",
//     precio: "10",
//     stock: "no hay stock"
//   });
  

  // const dbRef = ref(getDatabase());
//   get(child(dbRef, products/ ${productID})).then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val())
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
 };
