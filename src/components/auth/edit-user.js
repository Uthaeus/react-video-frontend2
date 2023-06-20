import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function EditUser() {
    const { user, loginUser } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: user });
    const navigate = useNavigate();

    function buildForm(data) {
        let formData = new FormData();
        formData.append("user[username]", data.username);
        formData.append("user[email]", data.email);
        formData.append("user[password]", data.password);

        if (data.avatar[0]) {
            formData.append("user[avatar]", data.avatar[0]);
        }

        return formData;
    }

    function submitHandler(data) {
        fetch(`http://localhost:4000/users/`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("practice-token")}`,
            },
            body: buildForm(data),
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Something went wrong");
        })
        .then((data) => {
            console.log('edit user data: ', data);
            loginUser(data.data);
            navigate("/");
        })
        .catch((error) => console.log("edit user error: ", error.message)); 
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="edit-user-form">
            <div className="form-group mb-2">
                <label htmlFor="username">Username</label>
                <input type='text' className="form-control" {...register("username", { required: true })} />
                {errors?.username && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="email">Email</label>
                <input type='email' className="form-control" {...register("email", { required: true })} />
                {errors?.email && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="avatar">Avatar</label>
                <input type='file' className="form-control" {...register("avatar")} />
            </div>

            <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input type='password' className="form-control" {...register("password", { required: true })} />
                {errors?.password && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <input type='password' className="form-control" {...register("password_confirmation", { required: true })} />
                {errors?.password_confirmation && <span className="text-danger">This field is required</span>}
            </div>

           <div className="form-group mb-4">
                <label htmlFor="current_password">Current Password</label>
                <input type='password' className="form-control" {...register("current_password", { required: true })} />
                {errors?.current_password && <span className="text-danger">This field is required</span>}
           </div>

            <div className="form-group mb-2">
                <button type="submit" className="edit-user-form-btn">Update</button>
            </div>
        </form>
    );
}

export default EditUser;