import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../store/user-context";

function PostForm({ post }) {
    const { register, handleSubmit, errors, reset } = useForm();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [method, setMethod] = useState('POST');
    const [url, setUrl] = useState('http://localhost:4000/posts');

    useEffect(() => {
        if (post) {
            reset(post);
            setMethod('PUT');
            setUrl('http://localhost:4000/posts/' + post.id);
        }
    }, [post, reset]);

    function buildForm(data) {
        const formData = new FormData();
        formData.append("post[title]", data.title);
        formData.append("post[video_url]", data.video_url);
        formData.append("post[description]", data.description);
        if (data.image[0]) {
            formData.append("post[image]", data.image[0]);
        }
        formData.append("post[user_id]", user.id);

        return formData;
    }

    function submitHandler(data) {
        const formData = buildForm(data);

        fetch(url, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('practice-token')
            },
            body: formData
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not save the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                navigate('/posts/' + data.id);
            })
            .catch(err => console.log('new post error: ', err));
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="post-form">
            <div className="form-group mb-3">
                <label htmlFor="title">Title</label>
                <input type='text' className="form-control" {...register("title", { required: true })} />
                {errors?.title && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
                <label htmlFor="video_url">Video URL</label>
                <input type='text' className="form-control" {...register("video_url", { required: true })} />
                {errors?.video_url && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-3">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" rows={3} {...register("description", { required: true })} />
                {errors?.description && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-4">
                <label htmlFor="image">Thumbnail Image</label>
                <input type='file' className="form-control" {...register("image")} />
            </div>

            <div className="form-group mb-2">
                <button type="submit" className="post-form-btn">Submit</button>
            </div>
        </form>
    );
}

export default PostForm;