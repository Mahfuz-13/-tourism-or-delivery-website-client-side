import React from "react";
import { Link } from "react-router-dom";
import useFierbase from "../../hooks/useFirebase";

const Login = () => {
  const { signInUsingGoogle } = useFierbase();
  return (
    <div>
      <h2>Login</h2>

      <p>
        new to Star Holidays? <Link to="/register">Create Account</Link>
      </p>
      <h1 className="p-5">Log In With Google</h1>
      <button onClick={signInUsingGoogle} className="btn btn-primary">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
