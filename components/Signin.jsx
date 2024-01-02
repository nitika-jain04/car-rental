import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Sucess!!"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="mt-5 ml-48 font-bold">Sign in Page</h1>
      <div className="flex gap-2 px-10 py-5">
        <label>Enter your email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-80 border-red-200 border-2"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
      </div>

      <div className="flex gap-2 px-5">
        <label>Enter your password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-80 border-red-200 border-2"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
      </div>

      <button
        onClick={signinUser}
        className="flex ml-20 mt-5 w-28 px-5 py-2 bg-red-400 text-white"
      >
        Sign in
      </button>
    </div>
  );
}
