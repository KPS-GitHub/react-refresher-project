import PropTypes from "prop-types";
import classes from './Post.module.css';


function Post({author, body, newPost}) {
    return (
        <div className={newPost ? classes.post+' '+classes.newPost : classes.post}>
            <h4>{author}</h4>
            <p>{body}</p>
        </div>
    )
}


Post.propTypes = {
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Post;