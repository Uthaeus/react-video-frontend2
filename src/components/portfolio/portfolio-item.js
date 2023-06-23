import { Link } from "react-router-dom";

function PortfolioItem({ portfolio }) {

    return (
        <div className="portfolio-item">
            <div className="portfolio-item-header">
                <Link to={`/portfolio/${portfolio.id}`} className="portfolio-item-title">{portfolio.title}</Link>
            </div>

            <div className="portfolio-item-body">
                <img className="portfolio-item-image" src={`http://localhost:4000${portfolio.thumb_image.url}`} alt={portfolio.title} width='100%' height='200px' />
            </div>

            <div className="portfolio-item-footer">
                item footer
            </div>
        </div>
    );
}

export default PortfolioItem;