var contract;
var permanent;
var minsalary;
var maxsalary;
var fulltime;
var partime;
var apiKey = "e6b644fb61f2e5d8cb060935d76de379";
var appID = "1cad4d53";
var apiURL;

function searchResults() {
  let jobTitle = document.getElementById("jobTitle").value;
  let location = document.getElementById("location").value;
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
  }
  else {
  contract = 1;
  permanent = 0;
  }
}

function hoursType(hoursTypeChoice) {
  if (hoursTypeChoice === "PartTime") {
  fulltime = 0;
  partime = 1;
  }
  else {
  fulltime = 1;
  partime = 0;
  }
}

/* if condition met append dto URL, else append something else.*/