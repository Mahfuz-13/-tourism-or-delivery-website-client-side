import React from "react";
import { Link } from "react-router-dom";
import useFierbase from "../../hooks/useFirebase";

const Register = () => {
  const { signInUsingGoogle, registerUsingEmail } = useFierbase();
  return (
    <div>
      <h2>Register: Create Account</h2>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <h1 className="p-5">Sing In With Google</h1>
      <button onClick={signInUsingGoogle} className="btn btn-primary">
        Google Sign In
      </button>
    </div>
  );
};

export default Register;
