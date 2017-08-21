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


function Store(name, minCust, maxCust, cookiePerCust) {

  this.name = name;
  this.storeHours = storeOpenHours;
  this.minHourlyCust = minCust;
  this.maxHourlyCust = maxCust;
  this.avgCookiePer = cookiePerCust;
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
    var newRow = createAndAppend('tr', tableBody);
    var newName = createAndAppend('td', newRow, this.name);
    for (var i = 0; i < this.storeHours.length; i++){
      createAndAppend('td', newRow, this.hourlyCookies[i]);
      if (allStoresHourlyTotals[i] >= 0){
        allStoresHourlyTotals[i] += this.hourlyCookies[i];
      }
      else{
        allStoresHourlyTotals[i] = this.hourlyCookies[i];
      }
    };
    createAndAppend('td', newRow, this.dailyCookies);
    uberTotal += this.dailyCookies;
  };

  this.calcAvgCookiePerHr();
};

function buildHead(table) {
  var tempHead = createAndAppend('thead', table, '', '', 'thead');
  var newCell = document.createElement('th');
  tempHead.appendChild(newCell);
  for (var i = 0; i < storeOpenHours.length; i++){
    createAndAppend('th', tempHead, storeOpenHours[i]);
  }
  var endCell = document.createElement('th');
  endCell.innerText = 'Store Total';
  tempHead.appendChild(endCell);
}

function buildBody(table, storesArray){
  createAndAppend('tbody', table, '', '', 'tblBody');
  for (var i = 0; i < storesArray.length; i++){
    storesArray[i].addYoSelf();
  }
}

function buildFoot(table){
  var myFooter = createAndAppend('tfoot', table);
  createAndAppend('td', myFooter, 'Total: ');
  for (var i = 0; i < storeOpenHours.length; i++){
    createAndAppend('td', myFooter, allStoresHourlyTotals[i]);
  };
  createAndAppend('td', myFooter, uberTotal);
}

function generateReport(storesArray){
  var bodyHolder = document.getElementById('salesBody');
  bodyHolder.innerHTML = '';
  var myTable = createAndAppend('table', bodyHolder, '','', myTable);

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

function createAndAppend(tag, parentVar, content, itsClass, itsId) {
  var newElement = document.createElement(tag);
  if (content) {
    newElement.innerText = content;
  }
  if (itsClass){
    newElement.className = itsClass;
  }
  if (itsId){
    newElement.setAttribute('id', itsId);
  }
  parentVar.appendChild(newElement);
  return newElement;
}
