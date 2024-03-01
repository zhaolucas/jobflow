import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function JobCard() {
    // Fetch job data from local storage or set an empty array if not available
    const jobDataFromLocalStorage = JSON.parse(localStorage.getItem('jobData')) || [];

    const getBackgroundColor = (jobStatus) => {
        switch (jobStatus) {
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
        <div>
            {jobDataFromLocalStorage.map((job, index) => (
                <Card
                    key={index}
                    bg={getBackgroundColor(job.jobStatus)}
                    text={getBackgroundColor(job.jobStatus) === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
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
                        
                        {/* Display job status as static text */}
                        <Card.Text>Job Status: {job.jobStatus}</Card.Text>

                        <Card.Text>Additional Notes: {job.additionalNotes}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default JobCard;
