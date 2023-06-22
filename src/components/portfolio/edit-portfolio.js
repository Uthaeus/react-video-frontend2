import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import PortfolioForm from "./portfolio-form";

function EditPortfolio() {
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/portfolio_items/${id}`)
        .then(response => response.json())
        .then(data => setPortfolio(data))
        .catch(error => console.log('portfolio detail error', error));
    }, [id]);

    return (
        <div className="edit-portfolio-item">
            <h1 className="edit-portfolio-item-title">Edit Portfolio Item</h1>

            <PortfolioForm portfolio={portfolio} />

            <div className="edit-portfolio-item-actions">
                <Link to={`/portfolio/${id}`} className="edit-portfolio-link back">Back To Portfolio Detail</Link>
                <Link to="#" className="edit-portfolio-link delete">Delete</Link>
                <Link to='/portfolio' className="edit-portfolio-link cancel">Back To Items</Link>
            </div>
        </div>
    );
}

export default EditPortfolio;