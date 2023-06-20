import { useForm } from "react-hook-form";
import { useEffect } from "react";

function BlogForm({ blog }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        if (blog) {
            reset(blog);
        }
    }, [blog, reset]);

    function submitHandler(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="blog-form">
            <div className="form-group mb-2">
                <label htmlFor="title">Title</label>
                <input type='text' className="form-control" {...register('title', { required: true })} />
                {errors?.title && <span className="error">Title is required</span>}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="body">Body</label>
                <textarea className="form-control" {...register('body', { required: true })} />
                {errors?.body && <span className="error">Body is required</span>}
            </div>

            {/* <div className="form-group">
                <label htmlFor="category">Category</label>
                <select className="form-control" {...register('category', { required: true })}>
                    <option value="">Select a category</option>
                </select>
            </div> */}

            <div className="form-group mb-3">
                <label htmlFor="image">Image</label>
                <input type='file' className="form-control" {...register('image')} />
            </div>

            <div className="form-group mb-2">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
}

export default BlogForm;