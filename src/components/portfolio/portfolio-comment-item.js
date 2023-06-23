
function PortfolioCommentItem({comment}) {

  return (
    <div className="portfolio-comment-item">
      <div className="comment__text">
        {comment.content}
      </div>

      <div className="comment__author">
        {comment.author}
      </div>
    </div>
  )
}

export default PortfolioCommentItem;