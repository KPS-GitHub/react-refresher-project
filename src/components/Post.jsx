import PropTypes from "prop-types";
import classes from './Post.module.css';

// const titles = ['Title 1', 'Title 2'];

function Post({title, body}) {
    // const chosenTitle = Math.random() > 0.5 ? titles[0] : titles[1];
    return (
        <div className={classes.post}>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
}


Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Post;