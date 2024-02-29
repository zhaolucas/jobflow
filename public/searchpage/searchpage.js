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
  console.log (APIURL);
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
