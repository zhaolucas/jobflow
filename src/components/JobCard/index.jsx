import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import JobStatusModal from './../JobStatusModal/index';

import './style.css';

function JobCard() {
    const jobDataFromLocalStorage = JSON.parse(localStorage.getItem('jobData')) || [];
    const [selectedJob, setSelectedJob] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (job) => {
        setSelectedJob(job);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleUpdateStatus = (newStatus, jobId) => {
        // Update the job status in your jobData array only for the specific job ID
        const updatedJobs = jobDataFromLocalStorage.map((job) =>
            job.id === jobId ? { ...job, jobStatus: newStatus } : job
        );

        // Update local storage with the new data
        localStorage.setItem('jobData', JSON.stringify(updatedJobs));

    };

    const getBackgroundColor = (jobStatus) => {
        switch (jobStatus) {
            case 'Interested':
                return 'interested';
            case 'Applied':
                return 'applied';
            case 'Interview':
                return 'interviewed';
            case 'Offered':
                return 'offered';
            case 'Rejected':
                return 'rejected';
            default:
                return 'dark';
        }
    };

    return (
        <Row xs={1} md={3} className="g-4">
            {jobDataFromLocalStorage.map((job) => (
                <Col key={job.id}>
                    <Card
                        className={`mb-2 ${getBackgroundColor(job.jobStatus)}`}
                        style={{ width: '18rem', cursor: 'pointer' }} // Add cursor: pointer to make the card clickable
                        onClick={() => handleOpenModal(job)} // Open the modal on card click
                    >
                        <Card.Header>Company Name: {job.companyName}</Card.Header>
                        <Card.Body>
                            <Card.Text>Job Status: {job.jobStatus}</Card.Text>
                            <Card.Title>Job Title: {job.jobTitle} </Card.Title>
                            <Card.Text>Job Description: {job.description}</Card.Text>
                            <Card.Text>Salary: {job.salary}</Card.Text>
                            <Card.Text>Location: {job.location}</Card.Text>
                            <Card.Text>Job Type: {job.jobType}</Card.Text>
                            <Card.Text>Employment Type: {job.employmentType}</Card.Text>
                            <Card.Text>Link To Job Advert: {job.linkToAd}</Card.Text>
                            <Card.Text>Additional Notes: {job.additionalNotes}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
             {/* Render the JobStatusModal */}
             {selectedJob && (
                <JobStatusModal
                    job={selectedJob}
                    showModal={showModal}
                    handleClose={handleCloseModal}
                    handleUpdate={handleUpdateStatus}
                />
            )}
        </Row>
    );
}

export default JobCard;
