'use strict';

var storeOpenHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, hours, minCust, maxCust, cookiePerHr) {

  this.name = name;
  this.storeHours = hours;
  this.minHourlyCust = minCust;
  this.maxHourlyCust = maxCust;
  this.avgCookiePer = cookiePerHr;
  this.hourlyCookies = [];
  this.dailyCookies = 0;

  this.customerPerHr = function() {
    var hourlyCustomerEst = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    //console.log('customers this hour: ' + hourlyCustomerEst);
    return hourlyCustomerEst;
  };

  this.calcAvgCookiePerHr = function() {
    this.hourlyCookies = [];
    this.dailyCookies = 0;
    for (var y = 0; y < this.storeHours.length; y++){
      //console.log('Iteration: ' + y);
      this.hourlyCookies.push(Math.ceil(this.customerPerHr() * this.avgCookiePer));
      //console.log('hourly cookies: ' + this.hourlyCookies[y]);
      this.dailyCookies += this.hourlyCookies[y];
      //console.log('current cookie total ' + this.dailyCookies);
    }
  };

  this.addYoSelf = function(){
    var tableBody = document.getElementById('tblBody');
    var newRow = document.createElement('tr');
    tableBody.appendChild(newRow);
    var newName = document.createElement('td');
    newName.innerText = this.name;
    newRow.appendChild(newName);
    for (var i = 0; i < this.storeHours.length; i++){
      var newCell = document.createElement('td');
      newCell.innerText = this.hourlyCookies[i];
      newRow.appendChild(newCell);
    };
    var newTotal = document.createElement('td');
    newTotal.innerText = this.dailyCookies;
    newRow.appendChild(newTotal);
  };

  this.calcAvgCookiePerHr();
};

// when you create the HTML element and store it into a variable - you shouldn't have to select that item again since it is stored in the variable already


var storeA = new Store('Kirk', storeOpenHours, 2, 20, 1.5);
storeA.addYoSelf();
var storeB = new Store('Spock', storeOpenHours, 30, 60, 2.5);
storeB.addYoSelf();
var storeC = new Store('Bones', storeOpenHours, 20, 80, 1);
storeC.addYoSelf();
var storeD = new Store('Chekov', storeOpenHours, 10, 60, 3.2);
storeD.addYoSelf();



//
//
// function addLocation(name){
//   var listAddition = document.createElement('ul');
//   var tempElement = document.getElementById('salesBody');
//   listAddition.setAttribute('id', name);
//   tempElement.appendChild(listAddition);
//   var titleLi = document.createElement('li');
//   titleLi.innerText = name.toUpperCase();
//   listAddition.appendChild(titleLi);
//   for (var i = 6; i < 21; i++){
//     var listItem = document.createElement('li');
//     listItem.setAttribute('id', name + i);
//     if (i < 12){
//       listItem.innerText = i + '   a.m. :  ' + locations[q].hourlyCookies[i - 6] + ' cookies.';
//       listAddition.appendChild(listItem);
//     }
//     else if (i === 12){
//       listItem.innerText = i + ' p.m. : ' + locations[q].hourlyCookies[i - 6] + ' cookies.';
//       listAddition.appendChild(listItem);
//     }
//     else {
//       listItem.innerText = (i - 12) + '   p.m. :  ' + locations[q].hourlyCookies[i - 6] + ' cookies.';
//       listAddition.appendChild(listItem);
//     }
//   }
//   var totalElement = document.createElement('li');
//   totalElement.setAttribute('id', name + 'Total');
//   totalElement.innerText = name.toUpperCase() + ' Daily Total:  ' + locations[q].dailyCookies + ' cookies.';
//   listAddition.appendChild(totalElement);
// }
//
