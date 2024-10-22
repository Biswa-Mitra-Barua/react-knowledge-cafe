import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
    const {title,cover,author,author_img, posted_date, reading_time, 
        hashtags
    } = blog;
    return (
        <div className='mb-16 mt-6'>
            <img className='w-full h-96 rounded-md' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center mt-6 space-y-3'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='text-yellow-500 text-xl'>
                        <FaRegBookmark></FaRegBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-3xl mt-4 font-semibold">{title}</h2>
            <p className='mt-2 text-gray-500'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash} </a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}
export default Blog;