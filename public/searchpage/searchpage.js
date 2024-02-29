var contract;
var permanent;
var minsalary;
var maxsalary;
var fulltime;
var parttime;
var anyJobType;
var anyHours;
var jobTitle;
var location;
var resultsperpage = 20
var apiKey = "e6b644fb61f2e5d8cb060935d76de379";
var appID = "1cad4d53";
var apiURL = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${appID}&app_key=${apiKey}&results_per_page=${resultsperpage}`


/* &what=Developer&where=London&salary_min=20000&salary_max=30000&full_time=1&contract=1` */

function searchResults() {
  jobTitle = document.getElementById("jobTitle").value;
  location = document.getElementById("location").value;
  let salary = document.getElementById("salary").value;
  let jobType = document.getElementById("jobType").value;
  let hours = document.getElementById("hours").value;
  salarySort(salary);
  jobTypeCheck(jobType);
  hoursType(hours);
}

function salarySort(salaryrange) {
  let salaryArr = salaryrange.split("-");
  minsalary = salaryArr[0];
  maxsalary = salaryArr[1];
}

 function jobTypeCheck(jobTypeChoice) {
  if (jobTypeChoice === "Permanent") {
  contract = 0;
  permanent = 1;
  anyJobType = 0;
  }
  else if (jobTypeChoice === "Contract") {
  contract = 1;
  permanent = 0;
  anyJobType = 0;
  }
  else {
  contract = 0;
  permanent = 0;
  anyJobType = 1;
    }
}
 
function hoursType(hoursTypeChoice) {
  if (hoursTypeChoice === "PartTime") {
  fulltime = 0;
  parttime = 1;
  anyHours = 0;
  }
  else if (hoursTypeChoice === "FullTime") {
  fulltime = 1;
  parttime = 0;
  anyHours = 0;
  }
  else {
  fulltime = 0;
  parttime = 0;
  anyHours = 1;
  }
}




/* if condition met append dto URL, else append something else.*/

/* https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1cad4d53&app_key=e6b644fb61f2e5d8cb060935d76de379&results_per_page=20&what=Developer&where=London&salary_min=20000&salary_max=30000&full_time=1&contract=1 */

/* https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1cad4d53&app_key=e6b644fb61f2e5d8cb060935d76de379&results_per_page=20&what=Developer&where=London&salary_min=20000&salary_max=30000&part_time=1&permanent=1 */

/* https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1cad4d53&app_key=e6b644fb61f2e5d8cb060935d76de379&results_per_page=20&what=Developer&where=London&salary_min=20000&salary_max=30000 */