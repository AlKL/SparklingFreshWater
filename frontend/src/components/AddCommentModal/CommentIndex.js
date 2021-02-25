import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import AddCommentModal from './CommentModal';

const AddComment = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        setSuccess(null);
    }

    const submitNewComment = async (values, { resetForm }) => {
        setSuccess('Comment submitted successfully!')
        resetForm({})
        console.log('Comment submitted');
    };

    return (
        <div>
            <AddCommentModal
                modalOpen={modalOpen}
                onSubmit={submitNewComment}
                error={error}
                onClose={closeModal}
                success={success}
            />
            <Button onClick={() => openModal()}>Contact Us!</Button>
        </div>
    )
}

export default AddComment;