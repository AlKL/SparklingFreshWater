import React from 'react';
import { Modal, Segment } from 'semantic-ui-react';
import AddCommentForm from './AddCommentForm';

const AddCommentModal = ({ modalOpen, onClose, onSubmit, error, success }) => {
    return (
        <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
            <Modal.Header>Contact us: <span className='successSpan'>{success}</span></Modal.Header>
            <Modal.Content>
                {error && <Segment inverted color="red">{`${error}`}</Segment>}
                <AddCommentForm onSubmit={onSubmit} onCancel={onClose} />
            </Modal.Content>
        </Modal>
    );
};

export default AddCommentModal;