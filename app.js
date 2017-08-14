

var firstPike = {

  minHourlyCust : 23,
  maxHourlyCust: 65,
  avgCookiePer: 6.3,

  customerPerHr: function() {
    var hourlyCustomerEst = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
  }
};
