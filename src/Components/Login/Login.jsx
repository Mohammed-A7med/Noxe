import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { doSignInWithEmailAndPassword } from "../Firebase/auth";
import { emailValidation, PasswordValidation } from "../Constant/VALIDATIONS";

export default function Login({ saveUserData }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "mohamedahmedkhalaf68@gmail.com",
      password: "@Password321!",
    },
  });

  async function onSubmit(data) {
    try {
      const response = await doSignInWithEmailAndPassword(
        data.email,
        data.password
      );

      // Save Firebase token or UID
      localStorage.setItem("userToken", response.user.accessToken);

      saveUserData();
      navigate("/Home");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  }

  return (
    <form className="w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <label className="mt-5" htmlFor="email">
        Email:
      </label>
      <div className="my-3">
        <input
          id="email"
          className="form-control my-2"
          type="email"
          aria-label="email"
          {...register("email", emailValidation)}
        />
        {errors.email && (
          <span className="text-danger my-2">{errors.email.message}</span>
        )}
      </div>

      <label className="mt-2" htmlFor="password">
        Password:
      </label>
      <input
        id="password"
        className="form-control my-2"
        type="password"
        aria-label="password"
        {...register("password", PasswordValidation)}
      />
      {errors.password && (
        <span className="text-danger my-2">{errors.password.message}</span>
      )}

      <div className="btn-register d-flex justify-content-end gap-3 my-4">
        <Link to="/Register" className="btn text-white border border-white">
          Register
        </Link>
        <button className="btn btn-info" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>
              please wait...{" "}
              <i className="fa-solid fa-spinner fa-spin mx-1"></i>
            </span>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </form>
  );
}
