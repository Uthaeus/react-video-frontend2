import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function SignIn() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();
    const { loginUser } = useContext(UserContext);

    function submitHandler(data) {
        console.log(data);
        let userData = {
            user: {
                email: data.email,
                password: data.password
            }
        };

        fetch("http://localhost:4000/users/sign_in", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then((response) => {
            if (response.ok) {
                localStorage.setItem("practice-token", response.headers.get("Authorization").split(" ")[1]);
                return response.json();
            }
            throw new Error("Something went wrong");
        })
        .then((data) => {
            console.log('signin data: ', data);
            loginUser(data.data);
            navigate("/");
        })
        .catch((error) => console.log("signin error: ", error.message));
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Sign In</h1>
            <form onSubmit={handleSubmit(submitHandler)} className="auth-form">
                <div className="form-group mb-2">
                    <label htmlFor="email">Email</label>
                    <input type='email' className="form-control" {...register("email", { required: true })} />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type='password' className="form-control" {...register("password", { required: true })} />
                    {errors?.password && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <button type="submit" className="auth-submit-btn">Sign In</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;