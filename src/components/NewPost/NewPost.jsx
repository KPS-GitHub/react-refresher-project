import React from 'react';
import Modal from '../UI/Modal';
import NewPostForm from './NewPostForm';

const NewPost = () => {
    return (
        <Modal>
            <NewPostForm />
        </Modal>
    );
};

export default NewPost;