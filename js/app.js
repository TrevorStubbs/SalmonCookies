'use strict';

var everyLocation = [];
// WARNING: this is not connected to the hourArrayGenerator. If the hours change I need to change this.
let hourlyCorrectionScale = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
let openHours = hoursArrayGenerator(6,8);

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


// Define the CookieStoreLocation
function CookieStoreLocation(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesPurchasedPerCustomer){
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPurchasedPerCustomer = averageCookiesPurchasedPerCustomer;
  this.hoursArray = openHours;
  this.customerArray = [];
  this.cookieArray = [];
  this.employeeArray = [];
  this.totalCookiesPerDay = 0;
  everyLocation.push(this);
}

//random number getter
CookieStoreLocation.prototype.getRandomNumber = function(min, max){
  return Math.floor(Math.random() * (max - (min +1))) + min;
};

// Generate customers per hour corrected for actual numbers
CookieStoreLocation.prototype.customersEachHour = function(){
  for(let i = 0; i < this.hoursArray.length; i++){
    let correction = hourlyCorrectionScale[i] * this.getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
    this.customerArray.push(correction);
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
CookieStoreLocation.prototype.renderSalesTableData = function() {
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
};

// Calculate how many Employees we need per hour
CookieStoreLocation.prototype.employeeCalculator = function(){
  // Calculate Each Hour
  for(let i = 0; i < this.customerArray.length; i++){
    let totalPerHour = Math.ceil(this.customerArray[i] / 20);
    if(totalPerHour < 2){
      totalPerHour = 2;
      this.employeeArray.push(totalPerHour);
    } else{
      this.employeeArray.push(totalPerHour);
    }
  }
  // Calculate total
  let sumTotal = 0;
  for(let i = 0; i < this.employeeArray.length; i++){
    sumTotal += this.employeeArray[i];
  }
  this.employeeArray.push(sumTotal);
};

//Render Employee Numbers
CookieStoreLocation.prototype.renderEmployeeTableData = function(){
  this.employeeCalculator();
  let parentElement = document.getElementById(`${this.name.toLowerCase()}-employee`);
  let tableHead = document.createElement('td');
  tableHead.textContent = this.name;
  parentElement.appendChild(tableHead);
  for(let i = 0; i < this.employeeArray.length-1; i++){
    tableHead = document.createElement('td');
    tableHead.textContent = this.employeeArray[i];
    parentElement.appendChild(tableHead);
  }
};

//Render Table Head
function renderTableHead(tagId){
  let parentElement = document.getElementById(tagId);
  let tableHead = document.createElement('th');
  tableHead.textContent = '';
  parentElement.appendChild(tableHead);
  for(let i = 0; i < openHours.length; i++){
    tableHead = document.createElement('th');
    tableHead.textContent = openHours[i];
    parentElement.appendChild(tableHead);
  }
  if(tagId === 'employee-table-head'){
    return;
  }else{
    tableHead = document.createElement('th');
    tableHead.textContent = 'Daily Location Total';
    parentElement.appendChild(tableHead);
  }
}

// Hourly total - tied to location constructor
function sumSalesHourly(){
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
  let parentElement = document.getElementById('cookie-table-foot');
  let tableFoot = document.createElement('td');
  tableFoot.textContent = 'Totals ';
  parentElement.appendChild(tableFoot);
  for(let i = 0; i < hourlyTotals.length; i++){
    tableFoot = document.createElement('td');
    tableFoot.textContent = hourlyTotals[i];
    parentElement.appendChild(tableFoot);
  }
}


// Build out Employee Table
// Hourly total
function sumEmployeeHourly(){
  let outputArray = [];
  for(let j = 0; j < openHours.length; j++){
    let sum = 0;
    for(let i = 0; i < everyLocation.length; i++){
      sum += everyLocation[i].employeeArray[j];
    }
    outputArray.push(sum);
  }
  return outputArray;
}

// Render Employee Totals
function renderEmployeeTotals(){
  let parentElement = document.getElementById('employee-table-foot');
  let tableFoot = document.createElement('td');
  tableFoot.textContent = 'Totals ';
  parentElement.appendChild(tableFoot);
  for(let i = 0; i < hourlyTotals.length; i++){
    tableFoot = document.createElement('td');
    tableFoot.textContent = hourlyEmployeeTotals[i];
    parentElement.appendChild(tableFoot);
  }
}

// Instantiating the classes
let seattleLocation = new CookieStoreLocation('Seattle', 23, 65, 6.3);
let tokyoLocation = new CookieStoreLocation('Tokyo', 3, 24, 1.2);
let dubaiLocation = new CookieStoreLocation('Dubai', 11, 38, 3.7);
let parisLocation = new CookieStoreLocation('Paris', 20, 38, 2.3);
let limaLocation = new CookieStoreLocation('Lima', 2, 16, 4.6);

// Render All the table rows
renderTableHead('cookie-table-head');
seattleLocation.renderSalesTableData();
tokyoLocation.renderSalesTableData();
dubaiLocation.renderSalesTableData();
parisLocation.renderSalesTableData();
limaLocation.renderSalesTableData();


// Have to call sumSalesHourly after the classes have been rendered
let hourlyTotals = sumSalesHourly();
renderTotals();

renderTableHead('employee-table-head');
seattleLocation.renderEmployeeTableData();
tokyoLocation.renderEmployeeTableData();
dubaiLocation.renderEmployeeTableData();
parisLocation.renderEmployeeTableData();
limaLocation.renderEmployeeTableData();

let hourlyEmployeeTotals = sumEmployeeHourly();
renderEmployeeTotals();

console.log(hourlyEmployeeTotals);
