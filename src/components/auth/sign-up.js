import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function SignUp() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();
    const { loginUser } = useContext(UserContext);

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
        console.log(data);
        if (data.password !== data.password_confirmation) {
            alert("Passwords do not match");
            return;
        }

        fetch("http://localhost:4000/users", {
            method: "POST",
            body: buildForm(data),
        })
        .then((response) => {
            if (response.ok) {
                localStorage.setItem("practice-token", response.headers.get("Authorization").split(" ")[1]);
                return response.json();
            }
            throw new Error("Something went wrong");
        })
        .then((data) => {
            console.log('signup data: ', data);
            loginUser(data.data);
            navigate("/");
        })
        .catch((error) => console.log("signup error: ", error.message));
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Sign Up</h1>
            <form onSubmit={handleSubmit(submitHandler)} className="auth-form">
                <div className="form-group mb-2">
                    <label htmlFor="username">Username</label>
                    <input type='text' className="form-control" {...register("username", { required: true })} />
                    {errors?.username && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="avatar">Avatar</label>
                    <input type='file' className="form-control" {...register("avatar")} />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input type='email' className="form-control" {...register("email", { required: true })} />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="password">Password</label>
                    <input type='password' className="form-control" {...register("password", { required: true })} />
                    {errors?.password && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type='password' className="form-control" {...register("password_confirmation", { required: true })} />
                    {errors?.password_confirmation && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <button type="submit" className="auth-submit-btn">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;