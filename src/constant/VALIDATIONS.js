export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Please enter a valid email",
  },
};

const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,}$/;

export const PasswordValidation = {
  required: "Password is required",
  pattern: {
    value: passwordRegEx,
    message:
      "Password must be at least 4 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character",
  },
};

export const NameValidation = (text) => {
  return {
    required: `${text} Name is required`,
    pattern: {
      value: /^[A-Za-z]{3,}$/,
      message: "Please enter a valid Name",
    },
  };
};

export const AgeValidation ={
  required: "Age is required",
  min: {
    value: 16,
    message: "Age must be at least 16",
  },
  max: {
    value: 99,
    message: "Age must be less than 100",
  },
}