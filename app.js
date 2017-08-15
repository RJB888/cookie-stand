
var firstPike = {

  name: 'First and Pike',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiePer: 6.3,
  hourlyCookies: [],
  dailyCookies: 0,

  customerPerHr: function() {
    var hourlyCustomerEst = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    console.log('customers this hour: ' + hourlyCustomerEst);
    return hourlyCustomerEst;
  }
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

var locations = [firstPike];

function calculateAvgCookies(potatoes) {
  for (var i = 0; i < potatoes.length; i++) {
    for (var y = 0; y < 15; y++){
      console.log('Iteration: ' + y);
      potatoes[i].hourlyCookies.push(Math.ceil(potatoes[i].customerPerHr() * potatoes[i].avgCookiePer));
      console.log('hourly cookies: ' + potatoes[i].hourlyCookies[y]);
      potatoes[i].dailyCookies += potatoes[i].hourlyCookies[y];
      console.log('current cookie total ' + potatoes[i].dailyCookies);
    }
  }

}

var listness = document.getElementById('firstItem');
listness.innerHTML += 'morestuff stuff';
