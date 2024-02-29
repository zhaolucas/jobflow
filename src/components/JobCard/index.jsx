import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function JobCard() {
    const [selectedJobStatus, setSelectedJobStatus] = useState('Pending'); // Default value, you can adjust as needed

    const handleJobStatusChange = (event) => {
        setSelectedJobStatus(event.target.value);
    };

    return (
        <>
            {['Success', 'Danger', 'Warning'].map((variant) => (
                <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>Company Name</Card.Header>
                    <Card.Body>
                        <Card.Title> Job Title </Card.Title>
                        <Card.Text>Job Description</Card.Text>
                        <Card.Text>Salary</Card.Text>
                        <Card.Text>Location</Card.Text>
                        <Card.Text>Job Type</Card.Text>
                        <Card.Text>Link To Job Advert</Card.Text>

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

                        <Card.Text>Additional Notes</Card.Text>
                    </Card.Body>
                </Card >
            ))
            }
        </>
    );
}

export default JobCard;
