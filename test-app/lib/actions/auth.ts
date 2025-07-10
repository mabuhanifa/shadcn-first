import { signIn } from "next-auth/react"; // Import signIn from next-auth/react

export const logIn = async () => {
  await signIn("google", {
    redirectTo: "/",
  });
};
export const logOut = async () => {
  await signIn("google");
};
