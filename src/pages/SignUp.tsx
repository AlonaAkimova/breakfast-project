import { useForm, SubmitHandler } from "react-hook-form";
import { signUpService } from "../services/auth.service";
import { createUser } from "../services/user.service";
import { Input, useInput, Grid, useTheme, Button } from "@nextui-org/react";

interface ISignUp {
  roomNumber: string;
  email: string;
  password: string;
  date: Date;
}

export const SignUp = () => {
  const { register, handleSubmit } = useForm<ISignUp>();

  const onSubmit: SubmitHandler<ISignUp> = async (
    { email, password, roomNumber },
    e
  ) => {
    e?.preventDefault();
    try {
      const user = await signUpService({ email, password });
      await createUser({ uid: user!.uid, email, roomNumber: +roomNumber });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/pexels_22.jpg')",
        backgroundSize: "cover",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1,
          color: "#fff",
        }}
      >
        Welcome to 'hotel_name'. Please signup and order you favourite dishes.
      </h1>
      <Grid.Container
        gap={2}
        justify="center"
        alignItems="center"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          paddingTop: "100px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <p>Enter your room number</p>
            <Input clearable {...register("roomNumber")} />
          </Grid>
          <Grid>
            <p>Write your email adress</p>
            <Input placeholder="email" {...register("email")} />
          </Grid>
          <Grid>
            <p>Provide your password</p>
            <Input.Password placeholder="password" {...register("password")} />
          </Grid>
          <Grid>
            <p>Choose delivery date</p>
            <Input width="180px" type="date" {...register("date")} />
          </Grid>
          <Grid>
            <Button shadow color="warning" auto type="submit">
              Sign Up
            </Button>
          </Grid>
        </form>
      </Grid.Container>
    </div>
  );
};
