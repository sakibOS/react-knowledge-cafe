import PropTypes from 'prop-types';
import { IoBookmarksSharp } from "react-icons/io5";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags,id}=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full  mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between space-y-4'>
                <div className='flex gap-3'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className="text-3xl">{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-3 text-2xl text-blue-400'><IoBookmarksSharp /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
            {
                hashtags.map((has,idx)=><span key={idx}><a href="">#{has}</a></span>)

            }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time,id)} className='text-purple-400 font-bold underline'>Mark as read</button>
            
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;