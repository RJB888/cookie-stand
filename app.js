'use strict';

var storeOpenHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStoresHourlyTotals = [];
var uberTotal = 0;

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
      if (allStoresHourlyTotals[i] >= 0){
        allStoresHourlyTotals[i] += this.hourlyCookies[i];
      }
      else{
        allStoresHourlyTotals[i] = this.hourlyCookies[i];
      }
    };
    var newTotal = document.createElement('td');
    newTotal.innerText = this.dailyCookies;
    uberTotal += this.dailyCookies;
    newRow.appendChild(newTotal);
  };

  this.calcAvgCookiePerHr();
};

// when you create the HTML element and store it into a variable - you shouldn't have to select that item again since it is stored in the variable already


function generateReport(storesArray){

  var myTable = document.createElement('table');
  var bodyHolder = document.getElementById('salesBody');
  bodyHolder.appendChild(myTable);

  function buildHead() {
    var tempHead = document.createElement('thead');
    myTable.appendChild(tempHead);
    var newCell = document.createElement('th');
    tempHead.appendChild(newCell);
    for (var i = 0; i < storeOpenHours.length; i++){
      var hourEntry = document.createElement('th');
      hourEntry.innerText = storeOpenHours[i];
      tempHead.appendChild(hourEntry);
    }
    var endCell = document.createElement('th');
    endCell.innerText = 'Store Total';
    tempHead.appendChild(endCell);
  }

  function buildBody(){
    var tableBody = document.createElement('tbody');
    tableBody.setAttribute('id','tblBody');
    myTable.appendChild(tableBody);
  }

  function buildFoot(){
    var myFooter = document.createElement('tfoot');
    myTable.appendChild(myFooter);
    var newCell = document.createElement('td');
    newCell.innerText = 'Total: ';
    myFooter.appendChild(newCell);
    for (var i = 0; i < storeOpenHours.length; i++){
      var nextCell = document.createElement('td');
      nextCell.innerText = allStoresHourlyTotals[i];
      myFooter.appendChild(nextCell);
    }
    newCell = document.createElement('td');
    newCell.innerText = uberTotal;
    myFooter.appendChild(newCell);
  }

  buildHead();
  buildBody();
  for (var i = 0; i < storesArray.length; i++){
    storesArray[i].addYoSelf();
  }
  buildFoot();

}
var storeA = new Store('Kirk', storeOpenHours, 2, 20, 1.5);
//debugger;
var storeB = new Store('Spock', storeOpenHours, 30, 60, 2.5);
//debugger;
var storeC = new Store('Bones', storeOpenHours, 20, 80, 1);
//debugger;
var storeD = new Store('Chekov', storeOpenHours, 10, 60, 3.2);
//debugger;
var myLocations = [storeA, storeB, storeC, storeD];

generateReport(myLocations);
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
