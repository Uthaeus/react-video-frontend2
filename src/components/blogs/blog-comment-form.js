import { useForm } from "react-hook-form";

function BlogCommentForm({ user }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function submitHandler(data) {
        console.log(data);
        reset();
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
