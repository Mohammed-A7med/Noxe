import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../Icons/ArrowLeftIcon";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 text-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="mb-4">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <button
          className="btn btn-primary px-4 py-2 rounded-pill"
          onClick={() => navigate("/dashboard/home")}
        >
          <ArrowLeftIcon width="24" height="24" className="me-2" /> Back to Home
        </button>
      </div>
    </div>
  );
}
