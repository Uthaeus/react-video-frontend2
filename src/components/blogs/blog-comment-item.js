
function BlogCommentItem({ comment }) {

    return (
        <div className="blog-comment-item">
            <div className="blog-comment-item-text">
                {comment.content}
            </div>

            <div className="blog-comment-item-author">
                {comment.author}
            </div>
        </div>
    );
}

export default BlogCommentItem;