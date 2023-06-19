import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function PostForm() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    function submitHandler(data) {
        console.log(data);
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="post-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type='text' className="form-control" {...register("title", { required: true })} />
                {errors?.title && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="video_url">Video URL</label>
                <input type='text' className="form-control" {...register("video_url", { required: true })} />
                {errors?.video_url && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" rows={3} {...register("description", { required: true })} />
                {errors?.description && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="image">Thumbnail Image</label>
                <input type='file' className="form-control" {...register("image")} />
            </div>

            <div className="form-group">
                <button type="submit" className="post-form-btn">Submit</button>
            </div>
        </form>
    );
}

export default PostForm;