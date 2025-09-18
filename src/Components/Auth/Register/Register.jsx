import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  AgeValidation,
  emailValidation,
  NameValidation,
  PasswordValidation,
} from "../../Constant/VALIDATIONS";
import { doCreateUserWithEmailAndPassword } from "../../Firebase/auth";
import AuthLayout from "../../Layouts/AuthLayout";
import FormField from "../../Ui/FormField";
import SpinnerIcon from "../../Ui/SpinnerIcon";

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
      toast.success("You’ve registered successfully");
      navigate("/Login");
    } catch (error) {
      toast.error("Registration failed. Please try again");
    }
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Registration Form</h2>

        {/* First Name */}
        <FormField
          label="First Name"
          id="firstName"
          type="text"
          {...register("firstName", NameValidation("First"))}
          error={errors.firstName}
        />

        {/* Last Name */}
        <FormField
          label="Last Name"
          id="lastName"
          type="text"
          {...register("lastName", NameValidation("Last"))}
          error={errors.lastName}
        />

        {/* Age */}
        <FormField
          label="Age"
          id="age"
          type="text"
          {...register("age", AgeValidation)}
          error={errors.age}
        />

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

        <Link
          to="/login"
          className="text-white text-decoration-none fst-italic"
        >
          Already have an account?
        </Link>

        {/* Submit */}
        <div className="btn-register d-flex justify-content-end mt-2">
          <button
            className="btn btn-info"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>
                please wait... <SpinnerIcon />
              </span>
            ) : (
              "Register"
            )}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
