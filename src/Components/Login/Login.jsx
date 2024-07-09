import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../Firebase/auth";

export default function Login(props) {
  const [errorsList, setErrorsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function getFormValue(e) {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }

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
        await doSignInWithEmailAndPassword(user.email, user.password);
        localStorage.setItem('userToken' ,JSON.stringify(user.email));
        props.saveUserData();
        goToHome();
      } catch (error) {
        setErrorsList([{ message: error.message }]);
      }
      setIsLoading(false);
    }
  }

  function validateForm() {
    const schema = Joi.object({
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

  function goToHome() {
    navigate("/Home");
  }

  return (
    <form className="w-75 mx-auto" onSubmit={submitFormData}>
      {errorsList.map((error, index) => (
        <div key={index} className="alert alert-danger">
          {error.message}
        </div>
      ))}
      <label className="mt-5" htmlFor="email">
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
              please wait...{" "}
              <i className="fa-solid fa-spinner fa-spin mx-1"></i>
            </span>
          ) : (
            "login"
          )}
        </button>
      </div>
    </form>
  );
}
