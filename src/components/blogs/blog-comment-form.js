import { useForm } from "react-hook-form";

function BlogCommentForm({ user, blogId, addCommentHandler }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function submitHandler(data) {
        console.log(data);

        let dataToSubmit = {
            blog_comment: {
                content: data.content,
                blog_id: blogId,
                author: user ? user.username : 'Anonymous',
                user_id: user ? user.id : null
            }
        };

        fetch('http://localhost:4000/blog_comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSubmit),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            console.log('blog comment data', data);
            addCommentHandler(data);
            reset();
        })
        .catch((error) => console.log('blog comment error', error));
        
    }

    return (
        <form className="blog-comment-form" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group mb-2">
                <label htmlFor="name">Content</label>
                <textarea className="form-control" rows={3} {...register("content", { required: true })}></textarea>
                {errors?.content && <span className="text-danger">This field is required</span>}
            </div>

            <button type="submit" className="blog-comment-btn">Submit</button>
        </form>
    );
}

export default BlogCommentForm;
