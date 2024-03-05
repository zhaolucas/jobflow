import './style.css'

const JobSearch = () => {
  return (
    <body>
      <input id="jobTitle" type="text" placeholder="Job Title"></input>
      <input id="location" type="text" placeholder="Location"></input>
      <select name="Salary" id="salary" className='dropDown'>
        <option value="0-19999">less than £20,000</option>
        <option value="20000-29999">£20,000-£29,999</option>
        <option value="30000-39999">£30,000-£39,999</option>
        <option value="40000-49999">£40,000-£49,999</option>
        <option value="50000-60000">£50,000-£60,000</option>
        <option value="60000-5000000">more than £60,000</option>
      </select>
      <select name="JobType" id="jobType" className='dropDown'>
        <option value="Permanent">Permanent</option>
        <option value="Contract">Contract</option>
        <option value="AnyJobType">Any</option>
      </select>
      <select name="Hours" id="hours" className='dropDown'>
        <option value="PartTime">Part Time</option>
        <option value="FullTime">Full Time</option>
        <option value="AnyHours">Any</option>
      </select>
      <button onClick={searchResults} className='button'>Search Now</button>
      <button onClick={clearResults} className='button'>Clear Search Results</button>
      <div id="results"></div>
    </body>
  )
}

var basicAddress;
var minsalary;
var maxsalary;
var resultsperpage = 20
var apiKey = "e6b644fb61f2e5d8cb060935d76de379";
var appID = "1cad4d53";
var APIURL;

/* function which has several sub functions that is activated up search button activation */
function searchResults() {
  let jobTitle = document.getElementById("jobTitle").value.trim();
  let location = document.getElementById("location").value.trim();
  let salary = document.getElementById("salary").value;
  let jobType = document.getElementById("jobType").value;
  let hours = document.getElementById("hours").value;
  salarySort(salary);
  APIURL = customURL(jobTitle, location, minsalary, maxsalary, jobType, hours);
  callAPI(APIURL);
}

/* function which seperates lower and upper values from salary range choosen to be compatible with API */
function salarySort(salaryrange) {
  let salaryArr = salaryrange.split("-");
  minsalary = salaryArr[0];
  maxsalary = salaryArr[1];
}

/* appends onto custom URL job type dependent on user choice */
function jobTypeCheck(basicAddress, jobType) {
  if (jobType === "Permanent") {
    basicAddress = basicAddress.concat("&permanent=1");
    return basicAddress
  }
  else if (jobType === "Contract") {
    basicAddress = basicAddress.concat("&contract=1");
    return basicAddress
  }
  else {
    return basicAddress
  }
}

/* appends onto custom URL hour type dependent on user choice */
function hoursType(basicAddress, hours) {
  if (hours === "PartTime") {
    basicAddress = basicAddress.concat("&part_time=1");
    return basicAddress
  }
  else if (hours === "FullTime") {
    basicAddress = basicAddress.concat("&full_time=1");
    return basicAddress
  }
  else {
    return basicAddress
  }
}

/* creates custom URL for API based on user input */
function customURL(jobTitle, location, minsalary, maxsalary, jobType, hours) {
  basicAddress = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${appID}&app_key=${apiKey}&results_per_page=${resultsperpage}&what=${jobTitle}&where=${location}&salary_min=${minsalary}&salary_max=${maxsalary}`
  basicAddress = jobTypeCheck(basicAddress, jobType);
  basicAddress = hoursType(basicAddress, hours);
  return basicAddress;
}

/* takes custom URL created with user input and makes call to API server for results*/
function callAPI(customURL) {
  fetch(customURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      generateResults(data);
    })
}

/* access data object and create div for each search result using properties available */
function generateResults(data) {
  var check = document.getElementById('childdiv');
  if (check === null) {  
  var parentdiv = document.getElementById("results");
  var childdiv = document.createElement('div');
  childdiv.setAttribute("id","childdiv");
  for (let i = 0; i < data.results.length; i++) {
    var div = document.createElement('div');
    var a = document.createElement('a');
    var link = document.createTextNode("CLICK HERE FOR FULL ADVERT");
    a.appendChild(link);
    a.title = "CLICK HERE FOR FULL ADVERT";
    a.href = data.results[i].redirect_url;
    div.innerHTML = `
  <strong>Job Title:</strong> ${data.results[i].title} <br /><br />
  <strong>Job Description:</strong> ${data.results[i].description}<br /><br />(use provided advert link below to see full description) <br /><br />
  <strong>Location:</strong> ${data.results[i].location.display_name} <br /><br />
  <strong>Salary:</strong> ${data.results[i].salary_min} <br /><br />
  <strong>Hours Type:</strong> ${data.results[i].contract_time} <br /><br />
  <strong>Job Type:</strong> ${data.results[i].contract_type} <br /><br />
  `;
    div.setAttribute('class', 'resultsIndividual');
    childdiv.appendChild(div).appendChild(a);
  }
  parentdiv.appendChild(childdiv);}
else {
  clearResults()
  generateResults(data)
}
}

/* function for clearing current shown search results */
function clearResults() {
  var element = document.getElementById("childdiv");
  element.parentNode.removeChild(element);
}


var check = document.getElementById('childdiv');
if (check === null) ;


export default JobSearch;

