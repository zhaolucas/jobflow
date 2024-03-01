import React, { useState } from "react";
//import styles from "./JobForm.css";

function JobForm({ onJobSubmit }) {
  const [jobData, setJobData] = useState({
    //creating an object for jobdata with the following key:values
    //setjobdata to update the variable we use setjobdata based on user input
    companyName: "",
    jobTitle: "",
    description: "",
    location: "",
    salary: "",
    jobType: "",
    employmentType: "",
    linkToAd: "",
    jobStatus: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //onJobSubmit(jobData);
    // Reset form after submission
    let allJobData = JSON.parse(localStorage.getItem("jobData")) || []
    allJobData.push(jobData)
    localStorage.setItem("jobData", JSON.stringify(allJobData));
    setJobData({
      companyName: "",
      jobTitle: "",
      description: "",
      location: "",
      salary: "",
      jobType: "",
      employmentType: "",
      linkToAd: "",
      jobStatus: "",
      additionalNotes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="companyName"
        value={jobData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
        required
      />
      <input
        type="text"
        name="jobTitle"
        value={jobData.jobTitle}
        onChange={handleChange}
        placeholder="Job Title"
        required
      />
      <textarea
        name="description"
        value={jobData.description}
        onChange={handleChange}
        placeholder="Job Description"
        required
      ></textarea>
      <input
        type="text"
        name="location"
        value={jobData.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <select
        name="salary"
        value={jobData.salary}
        onChange={handleChange}
        required
      >
        <option value="below £20,000">Below £20,000</option>
        <option value="£20,000-29,999">£20,000-29,999</option>
        <option value="£30,000-39,999">£30,000-39,999</option>
        <option value="£40,000-49,999">£40,000-49,999</option>
        <option value="£50,000-59,999">£50,000-59,999</option>
        <option value="above £60,000">Above £60,000</option>
      </select>
      <select
        name="jobType"
        value={jobData.jobType}
        onChange={handleChange}
        required
      >
        <option value="remote">Remote</option>
        <option value="on-site">On-Site</option>
        <option value="hybrid">Hybrid</option>
      </select>
      <select
        name="employmentType"
        value={jobData.employmentType}
        onChange={handleChange}
        required
      >
        <option value="full-time">Full-Time</option>
        <option value="part-time">Part-Time</option>
        <option value="contract">Contract</option>
        <option value="temporary">Temporary</option>
        <option value="internship">Internship</option>
      </select>
      <select
        name="jobStatus"
        value={jobData.jobStatus}
        onChange={handleChange}
        required
      >
        <option value="interested">Interested</option>
        <option value="applied">Applied</option>
        <option value="interview">Interview Stage</option>
        <option value="offered">Offered</option>
        <option value="offered">Rejected</option>
      </select>
      <input
        type="url"
        name="linkToAd"
        value={jobData.linkToAd}
        onChange={handleChange}
        placeholder="Link to Job Advert/ Application Portal"
      />
      <textarea
        name="additionalNotes"
        value={jobData.additionalNotes}
        onChange={handleChange}
        placeholder="Additional Notes"
      ></textarea>
      <button type="submit">Add Job!</button>
    </form>
  );
}

export default JobForm;
