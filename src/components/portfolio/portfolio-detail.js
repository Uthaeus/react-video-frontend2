import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";
import PortfolioCommentForm from "./portfolio-comment-form";
import PortfolioCommentItem from "./portfolio-comment-item";
import Calculator from "../calculator/calculator";

function PortfolioDetail({ project }) {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [portfolio, setPortfolio] = useState(null);
    const [comments, setComments] = useState([]);
    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:4000/portfolio_items/${id}`)
        .then(response => response.json())
        .then(data => {
            setPortfolio(data);
            setComments(data.portfolio_comments);
            setTechnologies(data.technologies);
        })
        .catch(error => console.log('portfolio detail error', error));
    }, [id, project]);

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

    function addCommentHandler(comment) {
        setComments([comment, ...comments]);
    }

    if (!portfolio) return (<div className="loading">Loading...</div>);

    return (
        <div className="portfolio-detail">
            

            <div className="portfolio-detail-body">
                <div className='portfolio-detail-content-wrapper'>  
                    <div className="portfolio-detail-image">
                        <img src={`http://localhost:4000${portfolio.main_image?.url}`} alt={portfolio.title} width="100%" />
                        {technologies.length > 0 && (
                            <div className="portfolio-detail-technologies">
                                <p className="detail-technologies-title">technologies used:</p>

                                <div className="row row-cols-2">
                                    {technologies.map(technology => <span key={technology.id} className="portfolio-detail-technology col">- {technology.name}</span>)}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="portfolio-detail-content">
                        <h1 className="portfolio-detail-title">{portfolio.title}</h1>

                        <p className="portfolio-detail-description">{portfolio.description}</p>
                    </div>
                </div>

                <div className="portfolio-detail-footer">
                    <Link to="/portfolio" className="portfolio-detail-link back">Back To Portfolio</Link>

                    {user?.role === 'site_admin' && (
                        <>
                            <Link to={`/portfolio/${id}/edit`} className="portfolio-detail-link edit">Edit</Link>
                            <Link to="#" onClick={deleteHandler} className="portfolio-detail-link delete">Delete</Link>
                        </>
                    )}
                </div>
                
            </div>

            <div className="portfolio-detail-comments-wrapper">
                <PortfolioCommentForm portfolioId={id} user={user} addCommentHandler={addCommentHandler} />

                <p className="comments-wrapper-title">comments:</p>

                {comments.map(comment => <PortfolioCommentItem key={comment.id} comment={comment} />)}
            </div>

            
        </div>
    );
}

export default PortfolioDetail;