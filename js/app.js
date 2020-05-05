'use strict';

var everyLocation = [];

//Generate the hours array
function hoursArrayGenerator(open, close){
  let outputArray = [];
  close += 12;
  let totalHoursOpen = close-open;
  for(let i = 0; i < totalHoursOpen; i++){
    let hour = i + open;
    if (hour < 12){
      outputArray.push(`${hour}:00am`);
    } else {
      hour -= 12;
      outputArray.push(`${hour}:00pm`);
    }
  }
  return outputArray;
}

let openHours = hoursArrayGenerator(6,8);

// Define the CookieStoreLocation
function CookieStoreLocation(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesPurchasedPerCustomer){
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPurchasedPerCustomer = averageCookiesPurchasedPerCustomer;
  this.hoursArray = openHours;
  this.customerArray = [];
  this.cookieArray = [];
  this.totalCookiesPerDay = 0;
  everyLocation.push(this);
}

//random number getter
CookieStoreLocation.prototype.getRandomNumber = function(min, max){
  return Math.floor(Math.random() * (max - (min +1))) + min;
};

// Generate customers per hour
CookieStoreLocation.prototype.customersEachHour = function(){
  for(let i = 0; i < this.hoursArray.length; i++){
    this.customerArray.push(this.getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour));
  }
};

// Fill cookieArray with cookies each hour (rounded up).
CookieStoreLocation.prototype.averageCookiesPurchasedPerHour = function(){
  for(let i = 0; i < this.customerArray.length; i++){
    let wholeCookiesSoldPerHour = Math.ceil(this.customerArray[i] * this.averageCookiesPurchasedPerCustomer);
    this.cookieArray.push(wholeCookiesSoldPerHour);
    this.totalCookiesPerDay += wholeCookiesSoldPerHour;
  }
};

//Render Table Body Data
CookieStoreLocation.prototype.renderTableData = function() {
  this.customersEachHour();
  this.averageCookiesPurchasedPerHour();
  let parentElement = document.getElementById(this.name.toLowerCase());
  let tableHead = document.createElement('td');
  tableHead.textContent = this.name;
  parentElement.appendChild(tableHead);
  for(let i = 0; i < this.cookieArray.length; i++){
    tableHead = document.createElement('td');
    tableHead.textContent = this.cookieArray[i];
    parentElement.appendChild(tableHead);
  }
  tableHead = document.createElement('td');
  tableHead.textContent = this.totalCookiesPerDay;
  parentElement.appendChild(tableHead);
}

//Render Table Head
function renderTableHead(){
  let parentElement = document.getElementById('table-head');
  let tableHead = document.createElement('th');
  tableHead.textContent = '';
  parentElement.appendChild(tableHead);
  for(let i = 0; i < openHours.length; i++){
    tableHead = document.createElement('th');
    tableHead.textContent = openHours[i];
    parentElement.appendChild(tableHead);
  }
  tableHead = document.createElement('th');
  tableHead.textContent = 'Daily Location Total';
  parentElement.appendChild(tableHead);
}
renderTableHead();

// Hourly total
function sumHourly(){
  let outputArray = [];
  for(let j = 0; j < openHours.length; j++){
    let sum = 0;
    for(let i = 0; i < everyLocation.length; i++){
      sum += everyLocation[i].cookieArray[j];
    }
    outputArray.push(sum);
  }
  let sumTotal = 0;
  for(let i = 0; i < outputArray.length; i++){
    sumTotal += outputArray[i];
  }
  outputArray.push(sumTotal);
  return outputArray;
}


// Render Totals
function renderTotals(){
  let parentElement = document.getElementById('table-foot');
  let tableFoot = document.createElement('td');
  tableFoot.textContent = 'Totals ';
  parentElement.appendChild(tableFoot);
  for(let i = 0; i < hourlyTotals.length; i++){
    tableFoot = document.createElement('td');
    tableFoot.textContent = hourlyTotals[i];
    parentElement.appendChild(tableFoot);
  }
}


let seattleLocation = new CookieStoreLocation('Seattle', 23, 65, 6.3);
let tokyoLocation = new CookieStoreLocation('Tokyo', 3, 24, 1.2);
let dubaiLocation = new CookieStoreLocation('Dubai', 11, 38, 3.7);
let parisLocation = new CookieStoreLocation('Paris', 20, 38, 2.3);
let limaLocation = new CookieStoreLocation('Lima', 2, 16, 4.6);

seattleLocation.renderTableData();
tokyoLocation.renderTableData();
dubaiLocation.renderTableData();
parisLocation.renderTableData();
limaLocation.renderTableData();
let hourlyTotals = sumHourly();
renderTotals();


// console.log();
