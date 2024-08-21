import "./login.css";
import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router";
import { isEmail, isEmpty } from "../../utils/validators";
import { login } from "./api";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { Button, TextField, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import FormHelperText from "@mui/material/FormHelperText";
import useAuth from "../../hooks/useAuth";
// import { buttonClasses } from "@mui/material/Button";
const LoginForm = () => {
  const history = useHistory();
  const [redirect, doRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      history.push({ pathname: "/" });
    }
  }, [redirect]);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // const { isAuthorized } = useAuth();
  // if (isAuthorized) {
  //   history.push("/");
  //   return null;
  // }

  const onSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (isEmpty(data.email)) {
      errors.email = "Email is required";
    } else if (!isEmail(data.email)) {
      errors.email = "Email is not valid";
    }

    if (isEmpty(data.password)) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }
    setErrors({});
    try {
      setLoading(true);
      doRedirect(true);

      const res = await login(data.email, data.password);
        localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("token", res.token);
        doRedirect(true);
        setResponse(res);

    } catch (error) { 
      setResponse(error.data);
    } finally {
      setLoading(false);
    }
  };

  // const chooseGuest = async (e) => {
  //   localStorage.setItem("guest", JSON.stringify(1));
  //   console.log(localStorage.getItem("guest"), "Guesttttt");
  // };

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  return (
    <div className="bg">
      <Box className="containers" id="container">
        <form onSubmit={onSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
            <Logo mb={1} />
            <Typography color="#546e7a" variant="h6">Sign in to your account</Typography>
          </Box>
          <Stack alignItems="stretch" mb={2}>
            <TextField
              type="email"
              value={data.email}
              onChange={handle}
              label="Email address"
              size="small"
              name="email"
              margin="dense"
              error={errors.email}
              helperText={errors.email}
            />

            <TextField
              type="password"
              label="Password"
              size="small"
              value={data.password}
              onChange={handle}
              name="password"
              margin="dense"
              error={errors.password}
              helperText={errors.password}
            />

            {response["status"] === 400 && (
              <Box
                sx={{
                  padding: 1.5,
                  borderRadius: 1,
                  color: "#dc2626",
                  border: "solid 1px #fecaca",
                  marginBottom: 2,
                  fontSize: 14,
                  background: "#fef2f2",
                }}
              >
                {response["error"]}
              </Box>
            )}
          </Stack>
          <Stack spacing={1}>
            <Button
              startIcon={loading ? <CircularProgress size={14} /> : undefined}
              disabled={loading}
              type="submit"
              color="pallete1"
              variant="contained"
              sx={{ borderRadius: 50 }}
              disableElevation
            >
              Sign In
            </Button>
            <Link
              component={Button}
              color="pallete1"
              variant="contained"
              sx={{ borderRadius: 50 }}
              to="/signup"
              disableElevation
            >
              Create Account
            </Link>

            <Link
              color="pallete2"
              variant="contained"
              // onClick={chooseGuest}
              component={Button}
              to="/guest"
              disableElevation
              sx={{ borderRadius: 50 }}
            >
              Continue as guest
            </Link>
          </Stack>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
