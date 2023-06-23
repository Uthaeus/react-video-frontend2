import { useForm } from "react-hook-form";

function BlogCategoryForm({ addCategoryHandler }) {
    const { register, handleSubmit, reset } = useForm();

    function submitHandler(data) {
        console.log(data);
        let dataToSend = {
            category: {
                name: data.name
            }
        };
        
        fetch('http://localhost:4000/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('Success: ', data);
            reset();
        })
        .catch((error) => console.log('category submit error: ', error));
    }

    return (
        <form className="blog-category-form" onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" {...register('name')} />
            </div>

            <button type="submit" className="blog-category-from-btn">Submit</button>
        </form>
    );
}

export default BlogCategoryForm;