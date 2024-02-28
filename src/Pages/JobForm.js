import React, { useState } from 'react';

function JobForm({ onJobSubmit }) {
  const [jobData, setJobData] = useState({
    companyName: '',
    jobTitle: '',
    description: '',
    salary: '',
    location: '',
    jobType: 'remote',
    employmentType: 'full-time',
    linkToAd: '',
    jobStatus: 'interested', 
    additionalNotes: ''
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onJobSubmit(jobData);
    setJobData({
      companyName: '',
      jobTitle: '',
      description: '',
      salary: '',
      location: '',
      jobType: 'remote',
      employmentType: 'full-time',
      linkToAd: '',
      jobStatus: 'interested',
      additionalNotes: ''
    }); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="companyName" value={jobData.companyName} onChange={handleChange} placeholder="Company Name" required />
      <input type="text" name="jobTitle" value={jobData.jobTitle} onChange={handleChange} placeholder="Job Title" required />
      <textarea name="description" value={jobData.description} onChange={handleChange} placeholder="Job Description" required></textarea>
      <input type="text" name="salary" value={jobData.salary} onChange={handleChange} placeholder="Salary" />
      <input type="text" name="location" value={jobData.location} onChange={handleChange} placeholder="Location" required />
      
      <select name="jobType" value={jobData.jobType} onChange={handleChange} required>
        <option value="remote">Remote</option>
        <option value="on-site">On-Site</option>
        <option value="hybrid">Hybrid</option>
      </select>

      <select name="employmentType" value={jobData.employmentType} onChange={handleChange} required>
        <option value="full-time">Full-Time</option>
        <option value="part-time">Part-Time</option>
        <option value="contract">Contract</option>
        <option value="temporary">Temporary</option>
        <option value="internship">Internship</option>
      </select>

      <select name="jobStatus" value={jobData.jobStatus} onChange={handleChange} required>
        <option value="interested">Interested</option>
        <option value="applied">Applied</option>
        <option value="interview">Interview Stage</option>
      </select>
      <input type="url" name="linkToAd" value={jobData.linkToAd} onChange={handleChange} placeholder="Link to Ad" />
      <textarea name="additionalNotes" value={jobData.additionalNotes} onChange={handleChange} placeholder="Additional Notes"></textarea>
      <button type="submit">Submit Job</button>
    </form>
  );
}

export default JobForm;
