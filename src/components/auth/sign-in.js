import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();

    function submitHandler(data) {}

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