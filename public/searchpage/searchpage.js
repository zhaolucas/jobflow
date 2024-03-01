var basicAddress;
var minsalary;
var maxsalary;
var resultsperpage = 20
var apiKey = "e6b644fb61f2e5d8cb060935d76de379";
var appID = "1cad4d53";
var APIURL;

/* Working */
function salarySort(salaryrange) {
  let salaryArr = salaryrange.split("-");
  minsalary = salaryArr[0];
  maxsalary = salaryArr[1];
}

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

function customURL(jobTitle, location, minsalary, maxsalary, jobType, hours) {
  basicAddress = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${appID}&app_key=${apiKey}&results_per_page=${resultsperpage}&what=${jobTitle}&where=${location}&salary_min=${minsalary}&salary_max=${maxsalary}`
  basicAddress = jobTypeCheck(basicAddress, jobType);
  basicAddress = hoursType(basicAddress, hours);
  return basicAddress;
}

function callAPI(customURL) {
  fetch(customURL)
    .then(function (response) {
    return response.json();
  })
    .then(function (data) {
      generateResults(data);
        })
}


function generateResults(data) {
for (let i = 0; i < data.results.length; i++) {
/* access data object and create div for each search result using properties available */
console.log (data.results[i].title);
console.log (data.results[i].company.display_name);
console.log (data.results[i].description);
console.log (data.results[i].location.display_name);
console.log (data.results[i].salary_min);
console.log (data.results[i].contract_time);
console.log (data.results[i].contract_type);
console.log (data.results[i].redirect_url);
}

}