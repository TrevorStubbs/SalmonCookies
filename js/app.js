'use strict';

//random number test
function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - (min +1))) + min;
}

function cookieTotal(array){
  let total = 0;
  for(let i = 0; i < array.length; i++){
    total += i;
  }
  return total;
}

// Define seattle object
var seattleLocation = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPurchasedPerCustomer: 6.3,
  hoursOpen: 14,
  customersPerHour: function(){
    return getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
  },
  averageCookiesPurchasedPerHour: function(){
    return Math.ceil((this.customersPerHour() * this.averageCookiesPurchasedPerCustomer));
  },
  cookiesPurchasedEachHour: function(){
    let cookiesPerHour = [];
    for(let i = 0; i < this.hoursOpen; i++){
      cookiesPerHour.push(this.averageCookiesPurchasedPerHour());
    }
    return cookiesPerHour;
  }
};

//Define Tokyo Object


// Define Dubai Object


// Define Paris Object


// Define Lima Object





console.log(seattleLocation.cookiesPurchasedEachHour());
