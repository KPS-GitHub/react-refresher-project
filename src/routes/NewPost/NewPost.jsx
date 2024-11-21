import React from 'react';
import Modal from '../../components/UI/Modal';
import NewPostForm from './NewPostForm';
import { useOutletContext } from 'react-router-dom';

const NewPost = () => {
    const { allPosts, setAllPosts } = useOutletContext();

    return (
        <Modal>
            <NewPostForm allPosts={allPosts} setAllPosts={setAllPosts} />
        </Modal>
    );
};

export default NewPost;