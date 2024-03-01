import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function JobCard() {
    const [selectedJobStatus, setSelectedJobStatus] = useState('Pending');
    const jobDataFromLocalStorage = JSON.parse(localStorage.getItem('jobData')) || [];

    const handleJobStatusChange = (event) => {
        setSelectedJobStatus(event.target.value);
    };

    const getBackgroundColor = () => {
        switch (selectedJobStatus) {
            case 'Interested':
                return 'warning';
            case 'Applied':
                return 'info';
            case 'Interviewed':
                return 'secondary';
            case 'Offered':
                return 'success';
            case 'Rejected':
                return 'danger';
            default:
                return 'dark'; // Default background color
        }
    };

    return (
        <Card
            bg={getBackgroundColor()}
            text={getBackgroundColor() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
        >
            <Card.Header>Company Name: {jobDataFromLocalStorage[0]?.companyName}</Card.Header>
            <Card.Body>
                <Card.Title>Job Title: {jobDataFromLocalStorage[0]?.jobTitle} </Card.Title>
                <Card.Text>Job Description: {jobDataFromLocalStorage[0]?.description}</Card.Text>
                <Card.Text>Salary: {jobDataFromLocalStorage[0]?.salary}</Card.Text>
                <Card.Text>Location: {jobDataFromLocalStorage[0]?.location}</Card.Text>
                <Card.Text>Job Type: {jobDataFromLocalStorage[0]?.jobType}</Card.Text>
                <Card.Text>Employment Type: {jobDataFromLocalStorage[0]?.employmentType}</Card.Text>
                <Card.Text>Link To Job Advert: {jobDataFromLocalStorage[0]?.linkToAd}</Card.Text>

                <Form.Group controlId="jobStatus">
                    <Form.Label>Job Status</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Interested"
                        value="Interested"
                        checked={selectedJobStatus === 'Interested'}
                        onChange={handleJobStatusChange}
                    />
                    <Form.Check
                        type="radio"
                        label="Applied"
                        value="Applied"
                        checked={selectedJobStatus === 'Applied'}
                        onChange={handleJobStatusChange}
                    />
                    <Form.Check
                        type="radio"
                        label="Interviewed"
                        value="Interviewed"
                        checked={selectedJobStatus === 'Interviewed'}
                        onChange={handleJobStatusChange}
                    />
                    <Form.Check
                        type="radio"
                        label="Offered"
                        value="Offered"
                        checked={selectedJobStatus === 'Offered'}
                        onChange={handleJobStatusChange}
                    />
                    <Form.Check
                        type="radio"
                        label="Rejected"
                        value="Rejected"
                        checked={selectedJobStatus === 'Rejected'}
                        onChange={handleJobStatusChange}
                    />
                </Form.Group>

                <Card.Text>Additional Notes: {jobDataFromLocalStorage[0]?.additionalNotes}</Card.Text>
            </Card.Body>
        </Card >
    );
}

export default JobCard;
