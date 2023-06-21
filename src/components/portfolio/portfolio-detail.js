import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function PortfolioDetail() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/portfolio_items/${id}`)
        .then(response => response.json())
        .then(data => setPortfolio(data))
        .catch(error => console.log('portfolio detail error', error));
    }, [id]);

    function deleteHandler() {
        fetch(`http://localhost:4000/portfolio/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('portfolio deleted');
                navigate('/portfolio');
            }   
        })
        .catch(error => console.log('portfolio delete error', error));
    }

    if (!portfolio) return (<div className="loading">Loading...</div>);

    return (
        <div className="portfolio-detail">
            

            <div className="portfolio-detail-body">
                <div className="portfolio-detail-image">
                    <img src={`http://localhost:4000${portfolio.main_image?.url}`} alt={portfolio.title} width="100%" />
                </div>

                <div className="portfolio-detail-content">
                    <h1 className="portfolio-detail-title">{portfolio.title}</h1>

                    <p className="portfolio-detail-description">{portfolio.description}</p>
                </div>

                <div className="portfolio-detail-comments-wrapper">
                    comments here 
                </div>
            </div>

            <div className="portfolio-detail-header">
                <Link to="/portfolio" className="portfolio-detail-link back">Back To Portfolio</Link>

                {user?.role === 'site_admin' && (
                    <>
                        <Link to={`/portfolio/${id}/edit`} className="portfolio-detail-link edit">Edit</Link>
                        <Link to="#" onClick={deleteHandler} className="portfolio-detail-link delete">Delete</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default PortfolioDetail;