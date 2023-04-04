import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

interface ICreateUserProps {
  uid: string;
  email: string;
  roomNumber: number;
}

export const createUser = async ({
  uid,
  email,
  roomNumber,
}: ICreateUserProps) => {
  try {
    await setDoc(doc(db, "users", uid), {
      uid,
      email,
      roomNumber,
      theme: "light",
    });
  } catch (err) {
    console.log(err);
  }
};
