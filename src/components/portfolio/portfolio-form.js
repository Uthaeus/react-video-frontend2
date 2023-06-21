import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function PortfolioForm({ portfolio }) {
    const [url, setUrl] = useState('http://localhost:4000/portfolio_items');
    const [method, setMethod] = useState('POST');
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (portfolio) {
            reset(portfolio);
            setUrl(`http://localhost:4000/portfolio_items/${portfolio.id}`);
            setMethod('PUT');
        }
    }, [portfolio, reset]);

    function buildForm(data) {
        const formData = new FormData();

        formData.append('portfolio_item[title]', data.title);
        formData.append('portfolio_item[description]', data.description);

        if (data.main_image[0]) {
            formData.append('portfolio_item[main_image]', data.main_image[0]);
        }
        if (data.thumb_image[0]) {
            formData.append('portfolio_item[thumb_image]', data.thumb_image[0]);
        }

        return formData;
    }

    function submitHandler(data) {
        fetch(url, {
            method: method,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('practice-token')}`
            },
            body: buildForm(data)
        })
        .then(response => {
            if (response.ok) {
                console.log('portfolio saved');
                navigate('/portfolio');
            }
        })
        .catch(error => console.log('portfolio save error', error));
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