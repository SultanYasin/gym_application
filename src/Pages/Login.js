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