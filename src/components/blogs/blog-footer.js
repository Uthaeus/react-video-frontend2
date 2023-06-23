import { Link } from 'react-router-dom';

function BlogFooter() {

    return (
        <div className="blogs-footer">
            <p className='blogs-footer-text'>
            {'\u00A9 2023'} <a href='https://www.example.com' className='footer-link'>Example</a> | All Rights Reserved <Link href="#" className='back-to-top'>Back to top</Link>
            </p>
        </div>
    );
}

export default BlogFooter;