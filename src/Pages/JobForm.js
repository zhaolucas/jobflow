import React, { useState } from "react";
import "./style.css";

function JobForm({ onJobSubmit }) {
  const [jobData, setJobData] = useState({
    id: Date.now(), 
    companyName: "",
    jobTitle: "",
    description: "",
    location: "",
    salary: "",
    jobType: "",
    employmentType: "",
    jobStatus: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

        jobData.id = Date.now();

        onJobSubmit && onJobSubmit(jobData);

    let allJobData = JSON.parse(localStorage.getItem("jobData")) || []
    allJobData.push(jobData)
    localStorage.setItem("jobData", JSON.stringify(allJobData));
    setJobData({
      id: Date.now(),
      companyName: "",
      jobTitle: "",
      description: "",
      location: "",
      salary: "",
      jobType: "",
      employmentType: "",
      jobStatus: "",
      additionalNotes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="inputText"
        name="companyName"
        value={jobData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
        required
      />
      <input
        type="text"
        className="inputText"
        name="jobTitle"
        value={jobData.jobTitle}
        onChange={handleChange}
        placeholder="Job Title"
        required
      />
      <textarea
        name="description"
        className="inputText"
        value={jobData.description}
        onChange={handleChange}
        placeholder="Job Description"
        required
      ></textarea>
      <input
        type="text"
        className="inputText"
        name="location"
        value={jobData.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <select
        id='salary'
        className="dropdown"
        name="salary"
        value={jobData.salary}
        onChange={handleChange}
        required
      >
        <option value="">-Select Salary-</option>
        <option value="below £20,000">Below £20,000</option>
        <option value="£20,000-29,999">£20,000-29,999</option>
        <option value="£30,000-39,999">£30,000-39,999</option>
        <option value="£40,000-49,999">£40,000-49,999</option>
        <option value="£50,000-59,999">£50,000-59,999</option>
        <option value="above £60,000">Above £60,000</option>
      </select>
      <select
        id='jobType'
        className="dropdown"
        name="jobType"
        value={jobData.jobType}
        onChange={handleChange}
        required
      >
        <option value="">-Select Job Type-</option>
        <option value="remote">Remote</option>
        <option value="on-site">On-Site</option>
        <option value="hybrid">Hybrid</option>
      </select>
      <select
        id='employmentType'
        className="dropdown"
        name="employmentType"
        value={jobData.employmentType}
        onChange={handleChange}
        required
      >
        <option value="">-Select Hours Type-</option>
        <option value="full-time">Full-Time</option>
        <option value="part-time">Part-Time</option>
        <option value="contract">Contract</option>
        <option value="temporary">Temporary</option>
        <option value="internship">Internship</option>
      </select>
      <select
        id='jobStatus'
        className="dropdown"
        name="jobStatus"
        value={jobData.jobStatus}
        onChange={handleChange}
        required
      >
        <option value="">-Select Job Status-</option>
        <option value="Interested">Interested</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview Stage</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
      </select>
      <textarea
        name="additionalNotes"
        className="inputText"
        value={jobData.additionalNotes}
        onChange={handleChange}
        placeholder="Additional Notes"
      ></textarea>
      <button id='addJob' className="button" type="submit">Add Job!</button>
    </form>
  );
}

export default JobForm;
