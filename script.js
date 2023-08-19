import {db} from "./firebase.mjs";
import { collection, addDoc,getDocs,updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js"; 
let btn=document.getElementById('btn');
let inp=document.getElementById('aaa')
btn.addEventListener('click',async()=>{
try {
    const docRef = await addDoc(collection(db, "uss"), {
    input:inp.value,
  });
  console.log("Document written with ID: ", docRef.id);
  window.location.reload;
}
catch (e) {
  
  console.error("Error adding document: ", e);
}
});

// .then(){
  
// }
// let upd = document.getElementById('update');
 const upda=async(id)=>  {
   const ref = doc(db, "uss", id);
   let upInp=prompt("Enter")
    try {
      // Set the "capital" field of the document to true
    await updateDoc(ref, {
        // first: "PK"
         input:upInp,
      });
    // });
    console.log("Documents updated successfully.");
  } catch (e) {
    console.error("Error updating documents: ", e);
  }
};
// window.update=update;
// import {  from "firebase/firestore";
async function display(){
  const querySnapshot = await getDocs(collection(db, "uss"));
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  document.getElementById('dd').innerHTML+=`YOU ENTERED ${doc.data().input}<br/><button onclick='upda(${doc.id})'>Update</button>`;
// });
})};
display()