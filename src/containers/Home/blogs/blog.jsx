import SessionHeader from '../../../components/sessionHeader/sessionHeader';
import { blogs } from '../../../components/data';
import Button from '../../../components/button/button';
import './blog.css';
const Blog = () => {
    return (
        <div className="blogsContainer" id='blogs'>
            <div className="blogheader">
                <SessionHeader name1={"Our"} name2={"Blogs"}/>
            </div>

            <div className="blogs">
                {blogs.map(blog => (
                    <div className="blog" key={blog.id}>
                        <div className="img">
                            <img src={blog.img}/>
                        </div>

                        <div className="txtArea">
                            <div className="bloger">
                                <small><i className="fa fa-user"></i> <span>{blog.bloger}</span></small>
                                <small><i className="fa fa-clock-o"></i> <span>{blog.date}</span></small>
                            </div>
                            <hr/>
                            <h3>{blog.title}</h3>
                            <p>{blog.description}</p>

                            <Button placeholder={blog.btn}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Blog;