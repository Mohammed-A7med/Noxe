import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { emailValidation, PasswordValidation } from "../Constant/VALIDATIONS";
import { doCreateUserWithEmailAndPassword } from "../Firebase/auth";

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    try {
      await doCreateUserWithEmailAndPassword(data.email, data.password);
      navigate("/Login");
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  }

  return (
    <form className="w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <h2>Registration Form</h2>

      {/* First Name */}
      <label className="mt-4" htmlFor="firstName">
        First Name:
      </label>
      <div className="my-3">
        <input
          id="firstName"
          className="form-control my-2"
          type="text"
          {...register("firstName", {
            required: "First Name is required",
            pattern: {
              value: /^[A-Za-z]{3,}$/,
              message: "Please enter a valid Name",
            },
          })}
        />
        {errors.firstName && (
          <span className="text-danger my-2">{errors.firstName.message}</span>
        )}
      </div>

      {/* Last Name */}
      <label className="mt-2" htmlFor="lastName">
        Last Name:
      </label>
      <div className="my-3">
        <input
          id="lastName"
          className="form-control my-2"
          type="text"
          {...register("lastName", {
            required: "Last Name is required",
            pattern: {
              value: /^[A-Za-z]{3,}$/,
              message: "Please enter a valid Name",
            },
          })}
        />
        {errors.lastName && (
          <span className="text-danger my-2">{errors.lastName.message}</span>
        )}
      </div>

      {/* Age */}
      <label className="mt-2" htmlFor="age">
        Age:
      </label>
      <div className="my-3">
        <input
          id="age"
          className="form-control my-2"
          type="number"
          {...register("age", {
            required: "Age is required",
            min: {
              value: 16,
              message: "Age must be at least 16",
            },
            max: {
              value: 150,
              message: "Age must be less than 150",
            },
          })}
        />
        {errors.age && (
          <span className="text-danger my-2">{errors.age.message}</span>
        )}
      </div>

      {/* Email */}
      <label className="mt-2" htmlFor="email">
        Email:
      </label>
      <div className="my-3">
        <input
          id="email"
          className="form-control my-2"
          type="email"
          {...register("email", emailValidation)}
        />
        {errors.email && (
          <span className="text-danger my-2">{errors.email.message}</span>
        )}
      </div>

      {/* Password */}
      <label className="mt-2" htmlFor="password">
        Password:
      </label>
      <div className="my-3">
        <input
          id="password"
          className="form-control my-2"
          type="password"
          {...register("password", PasswordValidation)}
        />
        {errors.password && (
          <span className="text-danger my-2">{errors.password.message}</span>
        )}
      </div>

      {/* Submit */}
      <div className="btn-register d-flex justify-content-end my-4">
        <button className="btn btn-info" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>
              please wait...{" "}
              <i className="fa-solid fa-spinner fa-spin mx-1"></i>
            </span>
          ) : (
            "Register"
          )}
        </button>
      </div>
    </form>
  );
}
