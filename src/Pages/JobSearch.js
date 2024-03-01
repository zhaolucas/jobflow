import styles from "./JobSearch.css";

const JobSearch = () => {
    return ( 
    <body>
        <h1>Search Jobs</h1>
        <input id="jobTitle" type="text" placeholder="Job Title"></input>
        <input id="location" type="text" placeholder="Location"></input>
        <select name="Salary" id="salary">
            <option value="0-19999">less than £20,000</option>
            <option value="20000-29999">£20,000-£29,999</option>
            <option value="30000-39999">£30,000-£39,999</option>
            <option value="40000-49999">£40,000-£49,999</option>
            <option value="50000-60000">£50,000-£60,000</option>
            <option value="60000-5000000">more than £60,000</option>
        </select>
        <select name="JobType" id="jobType">
            <option value="Permanent">Permanent</option>
            <option value="Contract">Contract</option>
            <option value="AnyJobType">Any</option>
        </select>
        <select name="Hours" id="hours">
            <option value="PartTime">Part Time</option>
            <option value="FullTime">Full Time</option>
            <option value="AnyHours">Any</option>
        </select>
        <button onclick="searchResults(); clearResults()">Search Now</button>
        <button onclick="clearResults()">Clear Search Results</button>
        <h2>Results</h2>
        <script src="./searchpage.js"></script>
    </body>
    )
}

export default JobSearch;