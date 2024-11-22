import PropTypes from "prop-types";
import classes from './Post.module.css';
import { Link } from "react-router-dom";


function Post({ id, author, body, newPost }) {
    return (
        <div className={newPost ? classes.post + ' ' + classes.newPost : classes.post}>
            <Link to={id}>
                <h4>{author}</h4>
                <p>{body}</p>
            </Link>
        </div>
    )
}


Post.propTypes = {
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    newPost: PropTypes.bool
};

export default Post;