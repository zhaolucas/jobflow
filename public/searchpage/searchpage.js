var contract;
var permanent;
var minsalary;
var maxsalary;
var fulltime;
var partime;
var apiKey;
var appID;
var apiURL;




function searchResults() {
  let jobTitle = document.getElementById("jobTitle").value;
  let location = document.getElementById("location").value;
  let salary = document.getElementById("salary").value;
  let jobType = document.getElementById("jobType").value;
  let hours = document.getElementById("hours").value;
  salarySort(salary);


console.log (jobTitle);
console.log (location);
console.log (salary);
console.log (jobType);
console.log (hours);
console.log(minsalary);
console.log(maxsalary);
}

function salarySort(salaryrange) {
  let salaryArr = salaryrange.split("-");
  minsalary = salaryArr[0];
  maxsalary = salaryArr[1];
}

function jobType(jobTypeChoice) {
  if (jobTypeChoice === "Permanent")


}