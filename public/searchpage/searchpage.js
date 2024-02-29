
var resultsperpage = 20
var apiKey = "e6b644fb61f2e5d8cb060935d76de379";
var appID = "1cad4d53";
var APIURL;

function searchResults() {
  let minsalary
  let maxsalary
  let jobTitle = document.getElementById("jobTitle").value;
  let location = document.getElementById("location").value;
  let salary = document.getElementById("salary").value;
  let jobType = document.getElementById("jobType").value;
  let hours = document.getElementById("hours").value;
  salarySort(salary);
  APIURL = customURL(jobTitle, location, minsalary, maxsalary, jobType, hours);
  console.log (APIURL)
}

function salarySort(salaryrange) {
  let salaryArr = salaryrange.split("-");
  minsalary = salaryArr[0];
  maxsalary = salaryArr[1];
}

 function jobTypeCheck(basicAddress, jobType) {
  if (jobType === "Permanent") {
    basicAddress.concat("&permanent=1");
  }
  else if (jobType === "Contract") {
    basicAddress.concat("&contract=1");
  }
  else {
    return basicAddress
    }
}
 
function hoursType(basicAddress, hours) {
  if (hours === "PartTime") {
    basicAddress.concat("&part_time=1");
    return basicAddress
  }
  else if (hours === "FullTime") {
    basicAddress.concat("&full_time=1");
    return basicAddress
  }
  else {
    return basicAddress
  }
}

function customURL(jobTitle, location, minsalary, maxsalary, jobType, hours) {
  let basicAddress = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${appID}&app_key=${apiKey}&results_per_page=${resultsperpage}&what=${jobTitle}&where=${location}&salary_min=${minsalary}&salary_max=${maxsalary}`
  basicAddress = jobTypeCheck(basicAddress, jobType);
  basicAddress = hoursType(basicAddress, hours);
}


/* if condition met append dto URL, else append something else.*/

/* https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1cad4d53&app_key=e6b644fb61f2e5d8cb060935d76de379&results_per_page=20&what=Developer&where=London&salary_min=20000&salary_max=30000&full_time=1&contract=1 */

/* https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1cad4d53&app_key=e6b644fb61f2e5d8cb060935d76de379&results_per_page=20&what=Developer&where=London&salary_min=20000&salary_max=30000&part_time=1&permanent=1 */

/* https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1cad4d53&app_key=e6b644fb61f2e5d8cb060935d76de379&results_per_page=20&what=Developer&where=London&salary_min=20000&salary_max=30000 */