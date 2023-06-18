import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();

    function submitHandler(data) {}

    return (
        <div className="container">
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type='email' className="form-control" {...register("email", { required: true })} />
                    {errors?.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type='password' className="form-control" {...register("password", { required: true })} />
                    {errors?.password && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;