import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

interface ISignUpProps {
  email: string;
  password: string;
}

export const signUpService = async ({ email, password }: ISignUpProps) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
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
