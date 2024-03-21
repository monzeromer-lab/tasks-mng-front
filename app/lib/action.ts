"use server";

import { log } from "console";

async function signIn(method: string, data: FormData) {
  // 1. Validate data (optional)
  // You can add validation for username/email and password format here
  // if (!data.get('username') || !data.get('password')) {
  //   throw new Error('Missing username or password.');
  // }

  // 2. Choose appropriate API endpoint based on 'method'
  const url = method === "credentials" ? "/auth/login" : null;
  if (!url) {
    throw new Error("Unsupported authentication method.");
  }

  // 3. Send a request to the server-side API
  const response = await fetch("http://localhost:3001/auth/login", {
    method: "POST",
    body: JSON.stringify({name: data.get('email'), password: data.get('password')}),
  });
  log(await response.json())

  // 4. Handle response: success or error
  if (!response.ok) {
    throw new Error("Failed to sign in.");
  }

  const responseJson = await response.json();

  // 5. (Optional) Update user session or store tokens
  // Here you can handle storing tokens or user data in local storage/cookies
  // based on your authentication setup

  // 6. Return appropriate data (success/error)
  return responseJson; // Or a success object with relevant information
}

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error) {
        log(error)
      switch (error) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
