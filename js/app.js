'use strict';
console.log('Hello World!');


var seattleLocation = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPurchasedPerCustomer: 6.3,
  cookiesPurchasedEachHour: [],
  averageCookiesPurchasedPerHour: function(){
    console.log('Cookies per hour');
  },
  customersPerHour: function(){
    console.log('customers per hour')
  }

};

console.log(seattleLocation.minCustomersPerHour);
console.log(seattleLocation.maxCustomersPerHour);
console.log(seattleLocation.averageCookiesPurchasedPerCustomer);
console.log(seattleLocation.cookiesPurchasedEachHour);
seattleLocation.averageCookiesPurchasedPerHour();
seattleLocation.customersPerHour();

//random number test
function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - (min +1))) + min;
}
// Test random number
console.log(getRandomNumber(23, 65));