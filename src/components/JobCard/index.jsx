import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

function JobCard() {
    const jobDataFromLocalStorage = JSON.parse(localStorage.getItem('jobData')) || [];

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
            {jobDataFromLocalStorage.map((job, index) => (
                <Col key={index}>
                    <Card
                        className={`mb-2 ${getBackgroundColor(job.jobStatus)}`}
                        style={{ width: '18rem' }}
                    >
                        <Card.Header>Company Name: {job.companyName}</Card.Header>
                        <Card.Body>
                            <Card.Title>Job Title: {job.jobTitle} </Card.Title>
                            <Card.Text>Job Description: {job.description}</Card.Text>
                            <Card.Text>Salary: {job.salary}</Card.Text>
                            <Card.Text>Location: {job.location}</Card.Text>
                            <Card.Text>Job Type: {job.jobType}</Card.Text>
                            <Card.Text>Employment Type: {job.employmentType}</Card.Text>
                            <Card.Text>Link To Job Advert: {job.linkToAd}</Card.Text>
                            <Card.Text>Job Status: {job.jobStatus}</Card.Text>
                            <Card.Text>Additional Notes: {job.additionalNotes}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default JobCard;
