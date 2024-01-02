import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase.js";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Sucess!!")
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="ml-48 font-bold">Sign up Page</h1>
      <div className="flex gap-2 px-10 py-5">
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email here"
          required
          className="w-80 border-red-200 border-2"
        ></input>
      </div>

      <div className="flex gap-2 px-5">
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password here"
          required
          className="w-80 border-red-200 border-2"
        ></input>
      </div>

      <br />

      <button
        onClick={signupWithGoogle}
        className="flex ml-20 w-48 px-5 py-2 bg-red-400 text-white"
      >
        Sign in with Google
      </button>
      <button
        onClick={createUser}
        className="flex ml-20 w-28 px-5 py-2 bg-red-400 text-white"
      >
        Sign up
      </button>
    </div>
  );
}
