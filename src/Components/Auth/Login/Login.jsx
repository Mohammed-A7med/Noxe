import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { doSignInWithEmailAndPassword } from "../../Firebase/auth";
import {
  emailValidation,
  PasswordValidation,
} from "../../Constant/VALIDATIONS";
import FormField from "../../Ui/FormField";
import AuthLayout from "../../Layouts/AuthLayout";

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
    <AuthLayout>
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        {/* ---------- Email  Input  ---------- */}
        <FormField
          label="Email"
          id="email"
          type="email"
          {...register("email", emailValidation)}
          error={errors.email}
        />

        {/* ---------- Password  Input  ---------- */}
        <FormField
          label="Password"
          id="Password"
          type="password"
          {...register("password", PasswordValidation)}
          error={errors.password}
        />

        <div className="d-flex justify-content-end gap-3 my-4">
          <Link to="/Register" className="btn text-white border border-white">
            Register
          </Link>
          <button
            className="btn btn-info"
            type="submit"
            disabled={isSubmitting}
          >
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
    </AuthLayout>
  );
}
