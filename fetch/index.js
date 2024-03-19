import { addDoc, collection, getDocs } from "firebase/firestore"
import { firestoreDb } from "../FirebasrConfid"

export const writeData = async(userName, email, fullname) => {
    try {
        const docRef = await addDoc(collection(firestoreDb, "User"), 
        {userName: userName, email: email, fullname: fullname})
    console.log(docRef); 
    } catch (error) {
        console.error(error);
    }
   
}

export const readData = async() => {
    const arr = []
    try {
    const user = await getDocs(collection(firestoreDb, "User"))
user.forEach((doc)=> {
   arr.push({...doc.data(), id: doc.id});
})        
console.log(arr);
    } catch (error) {
        console.error(error);
    }
} 
