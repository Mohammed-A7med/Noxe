import React, { forwardRef } from "react";

const FormField = forwardRef(({ label, error, ...props }, ref) => {
  return (
    <div className="my-4">
      <label htmlFor={props.id}>{label} :</label>
      <input
        className="form-control my-2"
        {...props}
        ref={ref} 
      />
      {error && <span className="text-danger mt-2">{error.message}</span>}
    </div>
  );
});

export default FormField;