$(document).ready(function () {
  // variables
  var loadingbtn = $("#loading");
  var submitbtn1 = $("#submit1");
  var submitbtn2 = $("#submit2");
  var card = $("#response-card");
  var facts = $("#facts");
  var facttime = $("#fact-time");
  // actions
  loadingbtn.hide();
  card.hide();

  submitbtn1.click(function (e) {
    e.preventDefault();

    var data = document.getElementById("year");
    var year = data.value.toString();

    $.ajax({
      async: true,
      crossDomain: true,
      url:
        "https://numbersapi.p.rapidapi.com/" +
        year +
        "/year?fragment=true&json=true",
      method: "GET",
      headers: {
        "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        "x-rapidapi-key": "53261179d3msh4f625af6c821a4cp17aaa5jsn475301ddb7c1",
      },
      beforeSend: function () {
        card.hide();
        submitbtn1.hide();
        loadingbtn.show();
      },
      success: function (response) {
        console.log(response);
        facts.html(response.text);
        facttime.html(response.date);
      },
      complete: function () {
        loadingbtn.hide();
        submitbtn1.show();
        card.fadeIn();
      },
    });
  });

  submitbtn2.click(function (e) {
    e.preventDefault();

    var data1 = document.getElementById("date");
    var data2 = document.getElementById("month");
    var date = data1.value.toString();
    var month = data2.value.toString();

    $.ajax({
      async: true,
      crossDomain: true,
      url:
        "https://numbersapi.p.rapidapi.com/" +
        month +
        "/" +
        date +
        "/date?fragment=true&json=true",
      method: "GET",
      headers: {
        "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        "x-rapidapi-key": "53261179d3msh4f625af6c821a4cp17aaa5jsn475301ddb7c1",
      },
      beforeSend: function () {
        card.hide();
        submitbtn2.hide();
        loadingbtn.show();
      },
      success: function (response) {
        console.log(response);
        facts.html(response.text);
        facttime.html(response.year);
      },
      complete: function () {
        loadingbtn.hide();
        submitbtn2.show();
        card.fadeIn();
      },
    });
  });
});
