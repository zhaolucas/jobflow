import Card from 'react-bootstrap/Card';

function JobCard() {
    return (
        <>
            {[
                'Success',
                'Danger',
                'Warning',
            ].map((variant) => (
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
                        <Card.Text>
                            Job Description
                        </Card.Text>
                        <Card.Text>
                            Salary
                        </Card.Text>
                        <Card.Text>
                            Location
                        </Card.Text>
                        <Card.Text>
                            Job Type
                        </Card.Text>
                        <Card.Text>
                            Link To Job Advert
                        </Card.Text>
                        <Card.Text>
                            Job Status
                        </Card.Text>
                        <Card.Text>
                            Additional Notes
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}

export default JobCard;