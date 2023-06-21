import { useContext } from 'react';
import { useNavigate } from 'react-router';

import { UserContext } from '../store/user-context';

function Portfolio() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h1 className="portfolio-title">My Portfolio</h1>
                <p className="portfolio-subtitle">some quote or something here ....</p>
                {user?.role === 'site_admin' && <button onClick={() => navigate('/portfolio/new')} className="portfolio-button">Add Project</button>}
            </div>

            <div className="portfolio-body">
                items here 
            </div>

            <div className="portfolio-footer">
                footer here
            </div>
        </div>
    );
}

export default Portfolio;