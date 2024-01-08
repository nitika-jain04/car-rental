import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase.js";

const auth = getAuth(app);

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Sucess!!")
    );
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="font-bold mt-5">Sign up Page</h1>
      <div className="flex gap-2 px-10 py-5">
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email here"
          required
          className="w-80 border-red-200 border-2 px-2"
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
          className="w-80 border-red-200 border-2 px-2"
        ></input>
      </div>

      <br />

      <button
        onClick={createUser}
        className="flex w-28 px-5 py-2 bg-red-400 text-white"
      >
        Sign up
      </button>
    </div>
  );
}
