import { useForm } from "react-hook-form";

function PortfolioCommentForm({ portfolioId, user, addCommentHandler }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function submitHandler(data) {
        let comment = {
            portfolio_comment: {
                content: data.content,
                portfolio_item_id: portfolioId,
                author: user ? user.username : 'Anonymous',
                user_id: user ? user.id : null
            }
        };

        fetch('http://localhost:4000/portfolio_comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment)
        })
        .then(response => response.json())
        .then(data => {
            addCommentHandler(data);
            reset();
        })
        .catch(error => console.log('comment error', error));
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="portfolio-comment-form">
            <div className="form-group mb-2">
                <label htmlFor="text">Comment</label>
                <textarea className="form-control" rows={3} {...register('content', { required: true })} />
                {errors?.content && <span className="error">Comment is required</span>}
            </div>

            <button type="submit" className="comment-btn">Submit</button>
            
        </form>
    );
}

export default PortfolioCommentForm;