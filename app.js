'use strict';

function Store(name, minCust, maxCust, cookiePerHr) {

  this.name = 'First and Pike';
  this.storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
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
  this.calcAvgCookiePerHr();
};

var seaTac = {

  name: 'SeaTac Airport',
  minHourlyCust : 3,
  maxHourlyCust: 24,
  avgCookiePer: 1.2,
  hourlyCookies: [],
  dailyCookies: 0,

  customerPerHr: function() {
    var hourlyCustomerEst = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    console.log('customers this hour: ' + hourlyCustomerEst);
    return hourlyCustomerEst;
  }
};

var seattleCenter = {

  name: 'Seattle Center',
  minHourlyCust : 11,
  maxHourlyCust: 38,
  avgCookiePer: 3.7,
  hourlyCookies: [],
  dailyCookies: 0,

  customerPerHr: function() {
    var hourlyCustomerEst = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    console.log('customers this hour: ' + hourlyCustomerEst);
    return hourlyCustomerEst;
  }
};

var capitolHill = {

  name: 'Capitol Hill',
  minHourlyCust : 20,
  maxHourlyCust: 38,
  avgCookiePer: 2.3,
  hourlyCookies: [],
  dailyCookies: 0,

  customerPerHr: function() {
    var hourlyCustomerEst = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    console.log('customers this hour: ' + hourlyCustomerEst);
    return hourlyCustomerEst;
  }
};

var alki = {

  name: 'Alki',
  minHourlyCust : 2,
  maxHourlyCust: 16,
  avgCookiePer: 4.6,
  hourlyCookies: [],
  dailyCookies: 0,

  customerPerHr: function() {
    var hourlyCustomerEst = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    console.log('customers this hour: ' + hourlyCustomerEst);
    return hourlyCustomerEst;
  }
};

var locations = [firstPike, seaTac, seattleCenter, capitolHill, alki];


// when you create the HTML element and store it into a variable - you shouldn't have to select that item again since it is stored in the variable already


function addLocation(name){
  var listAddition = document.createElement('ul');
  var tempElement = document.getElementById('salesBody');
  listAddition.setAttribute('id', name);
  tempElement.appendChild(listAddition);
  var titleLi = document.createElement('li');
  titleLi.innerText = name.toUpperCase();
  listAddition.appendChild(titleLi);
  for (var i = 6; i < 21; i++){
    var listItem = document.createElement('li');
    listItem.setAttribute('id', name + i);
    if (i < 12){
      listItem.innerText = i + '   a.m. :  ' + locations[q].hourlyCookies[i - 6] + ' cookies.';
      listAddition.appendChild(listItem);
    }
    else if (i === 12){
      listItem.innerText = i + ' p.m. : ' + locations[q].hourlyCookies[i - 6] + ' cookies.';
      listAddition.appendChild(listItem);
    }
    else {
      listItem.innerText = (i - 12) + '   p.m. :  ' + locations[q].hourlyCookies[i - 6] + ' cookies.';
      listAddition.appendChild(listItem);
    }
  }
  var totalElement = document.createElement('li');
  totalElement.setAttribute('id', name + 'Total');
  totalElement.innerText = name.toUpperCase() + ' Daily Total:  ' + locations[q].dailyCookies + ' cookies.';
  listAddition.appendChild(totalElement);
}

for (var q = 0; q < locations.length; q++){
  addLocation(locations[q].name);
  console.log(q);

}
