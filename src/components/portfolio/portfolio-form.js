import { useForm } from "react-hook-form";
import { useEffect } from "react";

function PortfolioForm({ portfolio }) {
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (portfolio) {
            reset(portfolio);
        }
    }, [portfolio, reset]);

    function submitHandler(data) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="portfolio-form">
            <div className="form-group mb-2">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" {...register('title', {required: true})} />
            </div>

            <div className="form-group mb-2">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" {...register('description', {required: true})}></textarea>
            </div>

            <div className="form-group mb-2">
                <label htmlFor="main_image">Main Image</label>
                <input type="file" className="form-control" {...register('main_image', {required: true})} />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="thumb_image">Thumb Image</label>
                <input type="file" className="form-control" {...register('thumb_image', {required: true})} />
            </div>

            <div className="form-group mb-2">
                <button type="submit" className="portfolio-form-btn">{portfolio ? 'Update' : 'Save'}</button>
            </div>
        </form>
    );
}

export default PortfolioForm;