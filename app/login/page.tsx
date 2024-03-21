"use client";

import { authenticate } from "../lib/action";
import { useFormState, useFormStatus } from "react-dom";

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <form action={dispatch} className="bg-white rounded-lg w-62 h-64 flex flex-col p-4 items-center justify-center">
        <input type="email" name="email" className="m-2 p-2 text-black" placeholder="Email" required />
        <input
        className="m-2 p-2 text-black"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <div className="text-black">{errorMessage && <p>{errorMessage}</p>}</div>
        <LoginButton />
      </form>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} className="p-2 bg-black text-white rounded-lg" type="submit">
      Login
    </button>
  );
}
