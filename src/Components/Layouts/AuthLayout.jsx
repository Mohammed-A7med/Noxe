export default function AuthLayout({ children }) {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 mt-5">{children}</div>
      </div>
    </div>
  );
}
