function myFunction() {
  var us = document.getElementById("usage").value;
  var age = document.getElementById("age").value;
  var inputRecieved = true;

  if (isNaN(age) || age < 1 || age > 100) {
    alert("The age must be a number between 1 and 100");
    inputRecieved = false;
  }

  if (isNaN(us) || us < 0 || us == "") {
    alert("Not a time of usage!");
    inputRecieved = false;
  }

  if (inputRecieved) {
    var out = (age - 6) * 365 * us;
    document.getElementById("screenHours").innerHTML = out;
    document.getElementById("screenDays").innerHTML = out / 24;
    document.getElementById("screenYears").innerHTML = out / 24 / 365;
  }
}
