// Our labels along the x-axis
//var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",  "Oct", "Nov", "Dec" ];
var laundryType = ["Wash&Dry", "Wash DF", "Wash DFI"];
// orders
var washndry = [250];
var washdryfold = [450];
var washdryfoldiron = [300];


var charty = document.getElementById("ordersChart");
var kleenChart = new Chart(charty, {
  type: 'pie',
  data: {
    labels: laundryType,
    datasets: [
      { 
        label: "Wash & Dry",
        backgroundColor: "rgba(46, 204, 113,1.0)",
        data: washndry
      
      },
      {
        label: "Wash & Dry, Fold",
        data: washdryfold,
        backgroundColor: "rgba(231, 76, 60,1.0)"
       
        
        
      },
      { 
        label: "Wash & Dry, Fold, Iron",
        data: washdryfoldiron,
        backgroundColor: "rgba(34, 47, 62,1.0)"
      }

    ]

  }

  
});

//Users
var userGrowth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",  "Oct", "Nov", "Dec" ];
var users2018 = [30, 40, 62, 78, 100, 120, 140, 180, 220, 240,300, 450 ];
var chart = document.getElementById("usersChart");
var userChart = new Chart(chart, {
  type: 'bar',
  data: {
    labels: userGrowth,
    datasets: [
      { 
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#48dbfb", "#f368e0", "#222f3e", "#ff9f43", "#10ac84", "#5f27cd", "#576574"],
        data: users2018
      
      }
    ]
  },

  options: {
    legend: { display: false }
  }
});
