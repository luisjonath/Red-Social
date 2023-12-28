import React, { useMemo, useState } from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";

import validator from "validator";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../../store/auth/thunks";

export const RegisterPage = () => {

   const [formData, setFormData] = useState("")
   const dispatch = useDispatch()
   const {status, errorMessage} = useSelector(state => state.auth)
   const isCheckingAuthentication = useMemo(() => status === "checking", [status])
   
   const {
     register,
     handleSubmit,
     formState: { errors },
     reset,
     displayName,
     email,
     password,
    } = useForm();
    
    const onSubmit = handleSubmit((data) => {
      // console.log(data);
      dispatch(startCreatingUserWithEmailPassword(data))
      
      // alert("Enviando datos...")
      // reset()
  });

  const handleChange = (e) => {
    setFormData(e.target.value)
  }

  return (
    <div className="container-registerpage">
      <form className="form-registerpage" onSubmit={onSubmit}>
        <h2>Register</h2>
        <div className="input-container-registerpage">
          <input
            type="text"
            placeholder="Full Name"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            {...register("displayName", {
              required: {
                value: true,
                message: "El nombre es obligatorio",
              },
              minLength: {
                value: 6,
                message: "El nombre debe tener al menos 6 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El nombre no debe superar los 20 caracteres",
              },
            })}
          />
          
          {errors.displayName && <span>{errors.displayName.message}</span>}
          {/* {errors.displayName?.type === "minLength" && <span>El nombre debe tener al menos 6 caracteres</span>}
          {errors.displayName?.type === "maxLength" && <span>El nombre no debe superar los 20 caracteres</span>} */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={email}
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Correo no válido"
              }
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            {...register("password", { required: {
              value: true,
              message: "La contraseña es requerida"
            } })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div className="btn-registerpage">
          <div className="error-register">

          {
            errorMessage? errorMessage : ""
          }
          </div>
          <button type="submit" disabled={isCheckingAuthentication}>Register</button>
        </div>
        <div className="link-register">
          <p>Already have an account?</p>
          <Link to={"/auth/login"}>Login</Link>
        </div>
      </form>
    </div>
  );
};
