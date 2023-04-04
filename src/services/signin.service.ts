import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

interface ISignInProps {
  email: string;
  password: string;
}

export const signInService = async ({ email, password }: ISignInProps) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (err) {
    console.log(err);
  }
};
