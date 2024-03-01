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
  var parentdiv = document.createElement('div');
  parentdiv.setAttribute('id', 'results');
  document.body.appendChild(parentdiv);
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
  document.getElementById("results").appendChild(div).appendChild(a);
}
}

/* function for clearing current shown search results */
function clearResults() {
  var element = document.getElementById("results");
  element.parentNode.removeChild(element);
} 