// auth.js
import app from "./firebase"; // ⬅️ Import the initialized app
import { getAuth } from "firebase/auth";

// ✅ Setup Firebase Auth
const auth = getAuth(app);

export default auth;
