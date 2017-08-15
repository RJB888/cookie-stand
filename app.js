
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

//var locations = [firstPike];

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

//********** START TEMP CODE TO MANIUPULATE DOM *******////

// var listness = document.getElementById('firstItem');
// listness.innerHTML += 'morestuff n things';
// var li = newElement('li');
// li.innerHTML = 'more stuff n things';
// listness.appendChild(li);




function addLocation(name){
  var listAddition = document.createElement('ul');
  var tempElement = document.getElementById('salesBody');
  listAddition.setAttribute('id', name);
  tempElement.appendChild(listAddition);
  for (var i = 6; i < 21; i++){
    var listItem = document.createElement('li');
    listItem.setAttribute('id', name + i);
    if (i < 12){
      listItem.innerText = name.toUpperCase() + ' : ' + i + ' a.m.';
      listAddition.appendChild(listItem);
    }
    else if (i === 12){
      listItem.innerText = name.toUpperCase() + ' : ' + i + ' p.m.';
      listAddition.appendChild(listItem);
    }
    else {
      listItem.innerText = name.toUpperCase() + ' : ' + (i - 12) + ' p.m.';
      listAddition.appendChild(listItem);
    }
  }
}



for (var q = 0; q < locations.length; q++){
  addLocation(locations[q].name);
  console.log(q);

}

// var temp = document.getElementById('firstItem');
// var newElement = document.createElement('li');
// newElement.innerText = 'THis is a new h1 tag';
// temp.appendChild(newElement);
