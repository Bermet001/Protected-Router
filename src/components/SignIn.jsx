import { Box, CircularProgress, Typography, styled } from "@mui/material";
import Input from "./UI/Input";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { validationSignInSchema } from "../utils/helpers/validate";
import { showErrors } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { fetchSignIn } from "../store/slices/sign-in-slice";

const SignIn = () => {
  const { isLoading } = useSelector((state) => state.signIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    toast
      .promise(dispatch(fetchSignIn(values)), {
        success: "Successfully entered 👌",
        pending: "Hold on 🕐",
      })
      .then(() => {
        navigate("/profile");
      });

    resetForm();
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
    validateOnChange: false,
    validationSchema: validationSignInSchema,
  });

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <Input
          name="username"
          placeholder="Name"
          onChange={handleChange}
          value={values.username}
        />

        <Input
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />

        {showErrors(errors) && (
          <Typography color="red">{showErrors(errors)}</Typography>
        )}

        <Button type="submit" variant="contained">
          {isLoading ? <CircularProgress /> : "Submit"}
        </Button>
      </StyledForm>
    </StyledContainer>
  );
};

export default SignIn;

const StyledContainer = styled(Box)(() => ({
  height: "100vh",
  display: "grid",
  placeItems: "center",
}));

const StyledForm = styled("form")(() => ({
  padding: "30px",
  backgroundColor: "white",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));
