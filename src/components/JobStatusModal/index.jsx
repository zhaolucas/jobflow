import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const JobStatusModal = ({ job, showModal, handleClose, handleUpdate }) => {
    const [newStatus, setNewStatus] = useState(job.jobStatus);

    const handleStatusChange = (e) => {
        setNewStatus(e.target.value);
    };
    
    const handleSave = () => {
        handleUpdate(newStatus, job.id);
        handleClose();
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Job Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label>New Status:</label>
                <select value={newStatus} onChange={handleStatusChange}>
                    <option value="Interested">Interested</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offered">Offered</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default JobStatusModal;
