import React, { useEffect, useState } from "react";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import Profile from "../pages/Profile";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/profile");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div>
      {localStorage.getItem("email") ? (
        <Profile />
      ) : (
        <button onClick={handleClick}>Signin With Google</button>
      )}
    </div>
  );
}
export default SignIn;

/* import { signInWithPopup } from "firebase/auth";
import { auth, Provider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useEffect, useRef, useState } from "react";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";
function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "650px",
    margin: "auto",
    marginTop: "10%",
    borderRadius: "15px",
    boxShadow: "5px 5px 7px  #ccc",
    gap: "4px",
    padding: "10px",
    border: "solid 0.5px silver",
  };

  const handleChangeState = (event) => {
    setInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleResetState = (event) => {
    setIsSignup(!isSignup);
    setInput({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={boxStyle}>
        <Typography textAlign="center" variant="h4" padding={3}>
          {isSignup ? "Signup" : "Login"}
        </Typography>
        <Avatar sx={{ bgcolor: "secondary.main", margin: "auto" }}>
          <LockOutlinedIcon />
        </Avatar>
        {isSignup && (
          <TextField
            onChange={handleChangeState}
            name="name"
            type={"text"}
            value={input.name}
            variant="outlined"
            placeholder="Name :"
            fullWidth
            margin="normal"
          />
        )}
        <TextField
          onChange={handleChangeState}
          name="email"
          type={"email"}
          value={input.email}
          variant="outlined"
          placeholder="Email :"
          margin="normal"
          fullWidth
        />
        <TextField
          onChange={handleChangeState}
          name="password"
          type={"password"}
          value={input.password}
          variant="outlined"
          placeholder="Password :"
          margin="normal"
          fullWidth
        />
        {isSignup && (
          <TextField
            margin="normal"
            required
            fullWidth
            name="Password"
            label="Password"
            type="password"
            id="password"
            placeholder="ConfirmPassword"
          />
        )}
        <Button
          endIcon={isSignup ? <HowToRegSharpIcon /> : <LoginSharpIcon />}
          type="submit"
          sx={{ mt: 3, mb: 2 }}
          fullWidth
          variant="contained"
        >
          {isSignup ? "Signup" : "Login"}
        </Button>
        <br />
        <Button
          onClick={handleResetState}
          endIcon={isSignup ? <LoginSharpIcon /> : <HowToRegSharpIcon />}
        >
          {isSignup ? "Change to LOGIN" : "Don't have an account? signup"}
        </Button>

        <br />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <Grid item marginTop={2} marginBottom={3}>
          Forgot password?
        </Grid>
      </Box>
    </form>
  );
}
export default Login;
 */
