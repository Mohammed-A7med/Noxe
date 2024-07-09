import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../Firebase/auth";

export default function Register() {
  const [errorsList, setErrorsList] = useState([]);
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    first_Name: "",
    last_Name: "",
    Age: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function submitFormData(e) {
    e.preventDefault();
    setIsLoading(true);
    const validationResponse = validateForm();
    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details);
      setIsLoading(false);
    } else {
      setErrorsList([]); 
      try {
        await doCreateUserWithEmailAndPassword(user.email, user.password);
        setIsRegister(true);
        goToLogin(user);
      } catch (error) {
        setErrorsList([{ message: error.message }]);
        setIsRegister(false);
      }
      setIsLoading(false);
    }
  }

  function getFormValue(e) {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }

  function validateForm() {
    const schema = Joi.object({
      first_Name: Joi.string().alphanum().min(3).max(15).required(),
      last_Name: Joi.string().alphanum().min(3).max(15).required(),
      Age: Joi.number().integer().min(16).max(120).required(),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .min(3)
        .required(),
      password: Joi.string()
        .pattern(new RegExp(/^[a-zA-Z]{1,3}[0-9]{3}/))
        .required(),
    });

    return schema.validate(user, { abortEarly: false });
  }

  function goToLogin(userInfo) {
    navigate("/Login", { state: { userInfo } });
  }

  return (
    <form className="w-75 mx-auto" onSubmit={submitFormData}>
      <h2>Registration Form</h2>
      {errorsList.map((error, index) => (
        <div key={index} className="alert alert-danger">
          {error.message}
        </div>
      ))}
      <label className="mt-4" htmlFor="first_Name">
        First Name:
      </label>
      <input
        onChange={getFormValue}
        className="form-control my-2"
        type="text"
        name="first_Name"
      />

      <label className="mt-2" htmlFor="last_Name">
        Last Name:
      </label>
      <input
        onChange={getFormValue}
        className="form-control my-2"
        type="text"
        name="last_Name"
      />

      <label className="mt-2" htmlFor="Age">
        Age:
      </label>
      <input
        onChange={getFormValue}
        className="form-control my-2"
        type="number"
        name="Age"
      />

      <label className="mt-2" htmlFor="email">
        Email:
      </label>
      <input
        onChange={getFormValue}
        className="form-control my-2"
        type="email"
        name="email"
      />

      <label className="mt-2" htmlFor="password">
        Password:
      </label>
      <input
        onChange={getFormValue}
        className="form-control my-2"
        type="password"
        name="password"
      />
      <div className="btn-register d-flex justify-content-end my-4">
        <button className="btn btn-info" type="submit" disabled={isLoading}>
          {isLoading ? (
            <span>
              please wait... <i className="fa-solid fa-spinner fa-spin mx-1"></i>
            </span>
          ) : (
            "Register"
          )}
        </button>
      </div>
    </form>
  );
}
