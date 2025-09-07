function myFunction() {
  var us = document.getElementById("usage").value;
  var age = document.getElementById("age").value;
  var inputRecieved = true;

  if (isNaN(age) || age < 6 || age > 100) {
    alert("The age must be a number between 6 and 100");
    inputRecieved = false;
  }

  if (isNaN(us) || us < 0 || us > 24 || us == "") {
    alert("Usage must be between 0 and 24 hours!");
    inputRecieved = false;
  }

  if (inputRecieved) {
    var outHours = (age - 6) * 365 * us;
    document.getElementById("screenHours").innerHTML = outHours;
    var outDaysTmp = outHours / 24;
    var outDays = parseFloat(outDaysTmp.toFixed(1));
    document.getElementById("screenDays").innerHTML = outDays;
    var outYearsTmp = outDays / 365;
    var outYears1 = parseFloat(outYearsTmp.toFixed(1));
    document.getElementById("screenYears").innerHTML = outYears1;
  }
}
