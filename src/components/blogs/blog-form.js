import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function BlogForm({ blog }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (blog) {
            reset(blog);
        }
    }, [blog, reset]);

    function buildForm(data) {
        const formData = new FormData();

        formData.append('blog[title]', data.title);
        formData.append('blog[body]', data.body);

        if (data.image && data.image[0]) {
            formData.append('blog[image]', data.image[0]);
        }

        return formData;
    }

    function submitHandler(data) {
        console.log(data);

        fetch('http://localhost:4000/blogs', {
            method: 'POST',
            body: buildForm(data),
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('practice-token')
            }
        })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not create blog');
            }
            navigate('/blogs');
            return res.json();
        })
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