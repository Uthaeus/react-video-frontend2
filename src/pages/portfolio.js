import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { UserContext } from '../store/user-context';
import PortfolioItem from '../components/portfolio/portfolio-item';

function Portfolio() {
    const [portfolioItems, setPortfolioItems] = useState([]);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:4000/portfolio_items')
        .then(response => response.json())
        .then(data => setPortfolioItems(data))
        .catch(error => console.log('portfolio error', error));
    }, []);

    return (
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h1 className="portfolio-title">My Portfolio</h1>
                <p className="portfolio-subtitle">some quote or something here ....</p>
                {user?.role === 'site_admin' && <button onClick={() => navigate('/portfolio/new')} className="portfolio-button">Add Project</button>}
            </div>

            <div className="portfolio-body">
                {portfolioItems.map(portfolio => <PortfolioItem key={portfolio.id} portfolio={portfolio} />)} 
            </div>

            <div className="portfolio-footer">
                footer here
            </div>
        </div>
    );
}

export default Portfolio;