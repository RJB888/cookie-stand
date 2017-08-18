'use strict';

var storeOpenHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStoresHourlyTotals = [];
var uberTotal = 0;
var firstPike = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
var myLocations = [firstPike, seaTac, seattleCenter, capitolHill, alki];


function Store(name, minCust, maxCust, cookiePerHr) {

  this.name = name;
  this.storeHours = storeOpenHours;
  this.minHourlyCust = minCust;
  this.maxHourlyCust = maxCust;
  this.avgCookiePer = cookiePerHr;
  this.hourlyCookies = [];
  this.dailyCookies = 0;

  this.customerPerHr = function() {
    var hourlyCustomerEst = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    console.log('Hourly Customer: ' + hourlyCustomerEst);
    return hourlyCustomerEst;
  };

  this.calcAvgCookiePerHr = function() {
    this.hourlyCookies = [];
    this.dailyCookies = 0;
    for (var y = 0; y < this.storeHours.length; y++){
      this.hourlyCookies.push(Math.ceil(this.customerPerHr() * this.avgCookiePer));
      console.log('cookies this hour: ' + this.hourlyCookies[y]);
      this.dailyCookies += this.hourlyCookies[y];
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
    this.added = true;
  };

  this.calcAvgCookiePerHr();
};

function buildHead(table) {
  var tempHead = document.createElement('thead');
  table.appendChild(tempHead);
  tempHead.setAttribute('id', 'thead');
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

function buildBody(table, storesArray){
  var tableBody = document.createElement('tbody');
  tableBody.setAttribute('id','tblBody');
  table.appendChild(tableBody);
  for (var i = 0; i < storesArray.length; i++){
    storesArray[i].addYoSelf();
  }
}

function buildFoot(table){
  var myFooter = document.createElement('tfoot');
  table.appendChild(myFooter);
  var newCell = document.createElement('td');
  newCell.innerText = 'Total: ';
  myFooter.appendChild(newCell);
  for (var i = 0; i < storeOpenHours.length; i++){
    var nextCell = document.createElement('td');
    nextCell.innerText = allStoresHourlyTotals[i];
    myFooter.appendChild(nextCell);
  };
  newCell = document.createElement('td');
  newCell.innerText = uberTotal;
  myFooter.appendChild(newCell);
}

function generateReport(storesArray){
  var bodyHolder = document.getElementById('salesBody');
  bodyHolder.innerHTML = '';
  var myTable = document.createElement('table');
  myTable.setAttribute('id', 'myTable');
  bodyHolder.appendChild(myTable);
  buildHead(myTable);
  buildBody(myTable, myLocations);
  buildFoot(myTable);
}

// to capture form data
var newStoreForm = document.getElementById('addNewStore');
newStoreForm.addEventListener('submit', harvestAndPostData);
function harvestAndPostData(event) {
  event.preventDefault();
  var store = new Store(this.elements['storeName'].value, parseInt(this.elements['minCustomers'].value), parseInt(this.elements['maxCustomers'].value), parseFloat(this.elements['cookiesPerHour'].value));
  myLocations.push(store);
  generateReport(myLocations);
  newStoreForm.reset();
}

generateReport(myLocations);
// WOrking on function to create and append
// function createAndAppend(tag, itsClass, content, parent) {
//   var tempElement =
// }
