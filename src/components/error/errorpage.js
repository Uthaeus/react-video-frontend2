import { Link } from "react-router-dom";

function ErrorPage() {

    return (
        <div className="error-page-container">
            <h1 className="error-page-title">404</h1>
            <h2 className="error-page-subtitle">Page Not Found</h2>

            <Link to="/" className="error-page-link">Go Back Home</Link>
        </div>
    );
}

export default ErrorPage;