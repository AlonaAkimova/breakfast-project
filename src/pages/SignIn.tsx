import { useForm, SubmitHandler } from "react-hook-form";
import { signInService } from "../services/signin.service";
import { Button, Grid, Input } from "@nextui-org/react";
interface ISignIn {
  email: string;
  password: string;
}
export const SignIn = () => {
  const { register, handleSubmit } = useForm<ISignIn>();

  const onSubmit: SubmitHandler<ISignIn> = async ({ email, password }, e) => {
    {
      e?.preventDefault();
      try {
        await signInService({ email, password });
        console.log("user signed in");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Grid.Container
      gap={2}
      justify="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", width: "200px" }}
      >
        <Grid>
          <Input
            initialValue="Email"
            placeholder="email"
            {...register("email")}
          />
        </Grid>
        <Grid>
          <Input
            initialValue="password"
            placeholder="Password"
            {...register("password")}
          />
        </Grid>
        <Grid>
          <Button shadow color="warning" auto type="submit">
            Sign in
          </Button>
        </Grid>
      </form>
    </Grid.Container>
  );
};
