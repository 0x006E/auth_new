import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import useStore from "../store";
import app from "./firebaseConfig";

const auth = getAuth(app);
auth.onAuthStateChanged((user) => {
  useStore.setState({ user: user, loading: false });
});
// funtion to register a new user using firbase
async function register(name, email, password) {
  const result = {};
  await auth.setPersistence(browserLocalPersistence);
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      result["user"] = user;

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      result["error"] = { errorMessage, errorCode };
      // ..
    });
  if (!result.error && result.user) {
    // update the user profile
    await updateProfile(result.user, {
      displayName: name,
    });
  }
  return result;
}
async function logout() {
  await auth.signOut();
}

async function sendReset(email) {
  const result = {};
  await sendPasswordResetEmail(auth, email)
    .then(() => {
      result["message"] = "Email sent with password reset link. Check spam";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      result["error"] = { errorMessage, errorCode };
    });
  return result;
}

async function loginWithGoogle() {
  const result = {};
  const provider = new GoogleAuthProvider();
  provider.addScope("profile");
  await auth.setPersistence(browserLocalPersistence);
  await signInWithPopup(auth, provider)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      result["user"] = user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      result["error"] = { errorMessage, errorCode };
    });
  return result;
}

async function login(email, password) {
  const result = {};
  await auth.setPersistence(browserLocalPersistence);
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      result["user"] = user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      result["error"] = { errorMessage, errorCode };
    });
  return result;
}

export { login, loginWithGoogle, logout, register, sendReset, auth };
