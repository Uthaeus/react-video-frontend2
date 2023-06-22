
function PortfolioCommentItem({comment}) {
    let author = comment.user ? comment.user.username : 'Anonymous';

  return (
    <div className="portfolio-comment-item">
      <div className="comment__text">
        {comment.content}
      </div>

      <div className="comment__author">
        {author}
      </div>
    </div>
  )
}

export default PortfolioCommentItem;