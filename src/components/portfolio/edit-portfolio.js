import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import PortfolioForm from "./portfolio-form";

function EditPortfolio() {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/portfolio/${id}`)
        .then(response => response.json())
        .then(data => setPortfolio(data))
        .catch(error => console.log('portfolio detail error', error));
    }, [id]);

    return (
        <div>
            <h1>Edit Portfolio</h1>
            <hr />

            <PortfolioForm portfolio={portfolio} />

            <Link to={`/portfolio/${id}`} className="portfolio-detail-back">Back To Portfolio</Link>
            <Link to="#" className="portfolio-detail-delete">Delete</Link>
            <Link to='/portfolio' className="portfolio-detail-cancel">Cancel</Link>
        </div>
    );
}

export default EditPortfolio;