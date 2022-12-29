function submitForm() {
  console.log("submit");


  var productName = document.getElementById("products").value;
  var environmentName = document.getElementById("environments").value;

  if(productName=="Velmeni for Dentist"){
    productName="Velmeni_for_Dentist_Reports";
  }
  else if(productName=="Second Dentist"){
    productName="SecondDentists_Reports";
  }


  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var x = document.getElementById("dateinput");
  var date = x.value;
  var datearray = date.split("-");
  var raw_year = datearray[0];
  var year = raw_year.substr(raw_year.length -2,2);
  var month = datearray[1];
  var day = datearray[2];

  var monthname = parseInt(month);
  var reportID = day + "-" + monthname + "-" + year;
  fetchReport(reportID, productName, environmentName);
}

const fetchReport = (reportID, productName, environmentName) => {
  axios
    .get("https://velmeni.github.io/"+productName+"/"+environmentName+"/" + reportID + "/")
    .then((response) => {
      console.log(response);
      window.open(
        "https://velmeni.github.io/"+productName+"/"+environmentName+"/" + reportID + "/"
      );
    })
    .catch((error) => {
      console.log(error);
      alert("Report not found");
    });
};
