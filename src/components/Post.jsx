import PropTypes from "prop-types";

const titles = ['Title 1', 'Title 2']

function Post({title, body}) {
    const chosenTitle = Math.random() > 0.5 ? titles[0] : titles[1];
    return (
        <>
            <h4>{chosenTitle}</h4>
            <p>{body}</p>
        </>
    )
}


Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default Post;