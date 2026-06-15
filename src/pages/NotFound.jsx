// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="section not-found">
      <div className="container not-found-inner">
        <p className="section-label">404</p>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn btn-primary">
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
