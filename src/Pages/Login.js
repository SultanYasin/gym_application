import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
} from "./firebase";

const Login = () => {
  const [user] = useAuthState(auth);
  const history = useHistory();

  const handleLoginWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then(() => history.push("/"));
  };

  const handleLoginWithFacebook = () => {
    auth.signInWithPopup(facebookProvider).then(() => history.push("/"));
  };

  const handleLoginWithGithub = () => {
    auth.signInWithPopup(githubProvider).then(() => history.push("/"));
  };

  return (
    <div>
      {user ? (
        <button onClick={() => auth.signOut()}>Sign out</button>
      ) : (
        <>
          <button onClick={handleLoginWithGoogle}>Login with Google</button>
          <button onClick={handleLoginWithFacebook}>
            Login with Facebook
          </button>
          <button onClick={handleLoginWithGithub}>Login with Github</button>
        </>
      )}
    </div>
  );
};

export default Login;
