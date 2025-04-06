// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth , FacebookAuthProvider , signInWithPopup} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEO7uwNruV4xyEUR73rBRSd7BnBOGDsMM",
  authDomain: "bterms-8ef10.firebaseapp.com",
  projectId: "bterms-8ef10",
  storageBucket: "bterms-8ef10.appspot.com", // ✅ Fixed storageBucket
  messagingSenderId: "993015324411",
  appId: "1:993015324411:web:6b74ef2b68966890981a5e",
  measurementId: "G-XNWFTWE2HV",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new FacebookAuthProvider();








// ✅ Check Firestore Connection
const checkFirebaseConnection = async () => {
  try {
    const testCollectionRef = collection(db, "users"); // 🔹 Use a real collection name
    const testDocs = await getDocs(testCollectionRef);
    console.log("%c✅ Firebase is connected!", "color: green; font-weight: bold;");
    console.log(testDocs.docs.map((doc) => doc.data())); // Display documents
  } catch (error) {
    console.error("%c❌ Firebase connection failed!", "color: red;", error);
  }
};

// ✅ Run the connection check
checkFirebaseConnection();

export { db, auth , provider , signInWithPopup };
export default app;
