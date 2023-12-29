import React, { useMemo, useState } from "react";
import "./LoginPage.css";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../../store/auth/thunks";
import { useForm } from "../../../hooks/useForm";

export const LoginPage = () => {
  // const [formData, setFormData] = useState({})

  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm();

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log("google");
    dispatch(startGoogleSignIn());
  };

  return (
    <div className="container-loginpage">
      <form className="form-loginpage" onSubmit={onSubmit}>
        <h2>Login</h2>
        <div className="input-container-loginpage">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>
        {errorMessage ? errorMessage : ""}
        <div className="btn-loginpage">
          <button type="submit" disabled={isAuthenticating}>
            Login
          </button>

          <button onClick={onGoogleSignIn} disabled={isAuthenticating}>
            Google
          </button>
        </div>
        <Link to={"/auth/register"}>Create Account</Link>
      </form>
    </div>
  );
};
