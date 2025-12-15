import React, { useState } from "react";

import { LoginRegistration } from "./LoginRegistraationPage";


export const LoginRegistrationPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleResetFields = () => {
    setFields({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    })
  }

  const formValidation =()=>{}

  const handleChange = (event) => {
    const {name, value} = event.target;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(name === 'email' && !isValidEmail.test(value)){
      setErrors((prev)=>({...prev, [name]: !value ? "Fields can't be blank." : "Invalid Email Id."}))
    }
    if(name === 'password' && !passwordRegex.test(value)){
       setErrors((prev)=>({...prev, [name]: !value ? "Fields can't be blank." : "Password must be at least 6 characters long, contain one uppercase letter and one number."}))
    }
    setFields((prev)=>({...prev, [name]: value}))
  };

  const handleSignIn = () => {
    setIsLogin((prev) => !prev)
  }

  return (
    <>
      <LoginRegistration
        fields={fields}
        errors={errors}
        isLogin={isLogin}
        handleSignIn={handleSignIn}
        handleChange={handleChange}
      />
    </>
  );
};
