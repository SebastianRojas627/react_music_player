import AppLayout from "../../layouts/AppLayout";
import { Grid, TextField, Button } from "@mui/material";
import { useDispatch } from "../../context/ContextProvider";
import { types } from "../../context/playerReducer";
import { useForm, SubmitHandler } from "react-hook-form";
import { useStore } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

export const FormPage = () => {
  const navigate = useNavigate();
  const { auth } = useStore();
  console.log(auth);
  const dispatch = useDispatch();

  type Inputs = {
    name: String;
    email: String;
    password: String;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const login: SubmitHandler<Inputs> = () => {
    dispatch({ type: types.login });
    console.log(auth);
    navigate("/");
  };

  return (
    <>
      <AppLayout>
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Name"
                type="name"
                placeholder="name"
                fullWidth
                {...register("name", { required: true })}
                {...(errors.name && <span>This field is required</span>)}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="email"
                fullWidth
                {...register("email", { required: true })}
                {...(errors.email && <span>This field is required</span>)}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                placeholder="password"
                fullWidth
                {...register("password", { required: true })}
                {...(errors.password && <span>This field is required</span>)}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth onClick={login}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AppLayout>
    </>
  );
};
