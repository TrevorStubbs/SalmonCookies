'use strict';

// Collect all the data so I can use it later.
var everyLocation = [];
// WARNING: this is not connected to the hourArrayGenerator. If the hours change I need to change this.
let hourlyCorrectionScale = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
// Generate the open hours
let openHours = hoursArrayGenerator(6,8);
let hourlyTotals = [];
let hourlyEmployeeTotals = [];
let parentElement = document.getElementById('table');

//Generate the hours array
function hoursArrayGenerator(open, close){
  let outputArray = [];
  close += 12;
  let totalHoursOpen = close-open;
  for(let i = 0; i < totalHoursOpen; i++){
    let hour = i + open;
    if (hour < 13){
      outputArray.push(`${hour}:00am`);
    } else {
      hour -= 12;
      outputArray.push(`${hour}:00pm`);
    }
  }
  return outputArray;
}

// Define the CookieStoreLocation Constructor
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

//Random Number Generator
CookieStoreLocation.prototype.getRandomNumber = function(min, max){
  return Math.floor(Math.random() * (max - (min +1))) + min;
};

// Generate customers per hour corrected for actual numbers
CookieStoreLocation.prototype.customersEachHour = function(){
  this.customerArray = [];
  for(let i = 0; i < this.hoursArray.length; i++){
    let correction = hourlyCorrectionScale[i] * this.getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
    this.customerArray.push(Math.ceil(correction));
  }
};

// Fill cookieArray with cookies each hour (rounded up).
CookieStoreLocation.prototype.averageCookiesPurchasedPerHour = function(){
  this.cookieArray = [];
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
  parentElement = document.getElementById('sales');
  let parentTBody = document.createElement('tbody');
  parentTBody.setAttribute('id', 'cookie-table-body');
  parentElement.appendChild(parentTBody);
  let parentRow = document.createElement('tr');
  let tableHead = document.createElement('th');
  tableHead.textContent = this.name;
  parentRow.appendChild(tableHead);
  for(let i = 0; i < this.cookieArray.length; i++){
    tableHead = document.createElement('td');
    tableHead.textContent = this.cookieArray[i];
    parentRow.appendChild(tableHead);
  }
  tableHead = document.createElement('td');
  tableHead.textContent = this.totalCookiesPerDay;
  parentRow.appendChild(tableHead);
  parentTBody.appendChild(parentRow);
};

// Calculate how many Employees we need per hour
CookieStoreLocation.prototype.employeeCalculator = function(){
  this.employeeArray = [];
  // Calculate Each Hour
  for(let i = 0; i < this.customerArray.length; i++){
    let totalPerHour = Math.ceil(this.customerArray[i] / 20);
    if(totalPerHour <= 2){
      totalPerHour = 2;
      this.employeeArray.push(totalPerHour);
    } else{
      this.employeeArray.push(totalPerHour);
    }
  }
};

//Render Employee Numbers
CookieStoreLocation.prototype.renderEmployeeTableData = function(){
  this.employeeCalculator();
  parentElement = document.getElementById('employees');
  let parentTBody = document.createElement('tbody');
  parentTBody.setAttribute('id', 'employees');
  parentElement.appendChild(parentTBody);
  let parentRow = document.createElement('tr');
  let tableHead = document.createElement('th');
  tableHead.textContent = this.name;
  parentRow.appendChild(tableHead);
  for(let i = 0; i < this.employeeArray.length; i++){
    tableHead = document.createElement('td');
    tableHead.textContent = this.employeeArray[i];
    parentRow.appendChild(tableHead);
  }
  parentTBody.appendChild(parentRow);
};

//Render Table Head
function renderTableHead(tagId){
  parentElement = document.getElementById(tagId);
  let parentTHead = document.createElement('thead');
  parentTHead.setAttribute('id', tagId);
  parentElement.appendChild(parentTHead);
  let parentRow = document.createElement('tr');
  let tableHead = document.createElement('th');
  tableHead.textContent = '';
  parentRow.appendChild(tableHead);
  for(let i = 0; i < openHours.length; i++){
    tableHead = document.createElement('th');
    tableHead.textContent = openHours[i];
    parentRow.appendChild(tableHead);
  }
  if(tagId === 'employees'){
    parentTHead.appendChild(parentRow);
    return;
  }else{
    tableHead = document.createElement('th');
    tableHead.setAttribute('id', 'totals-cell');
    tableHead.textContent = 'Daily Location Total';
    parentRow.appendChild(tableHead);
  }
  parentTHead.appendChild(parentRow);
}

// Hourly total - tied to location constructor
function sumSalesHourly(){
  hourlyTotals = [];
  for(let j = 0; j < openHours.length; j++){
    let sum = 0;
    for(let i = 0; i < everyLocation.length; i++){
      sum += everyLocation[i].cookieArray[j];
    }
    hourlyTotals.push(sum);
  }
  let sumTotal = 0;
  for(let i = 0; i < hourlyTotals.length; i++){
    sumTotal += hourlyTotals[i];
  }
  hourlyTotals.push(sumTotal);
}

// Render Totals
function renderTotals(){
  parentElement = document.getElementById('sales');
  let parentTFoot = document.createElement('tfoot');
  parentTFoot.setAttribute('id', 'cookie-table-foot');
  parentElement.appendChild(parentTFoot);
  let parentRow = document.createElement('tr');
  let tableFoot = document.createElement('th');
  tableFoot.textContent = 'Totals';
  parentRow.appendChild(tableFoot);
  for(let i = 0; i < hourlyTotals.length; i++){
    tableFoot = document.createElement('td');
    tableFoot.textContent = hourlyTotals[i];
    parentRow.appendChild(tableFoot);
  }
  parentTFoot.appendChild(parentRow);
}

// Build out Employee Table
// Hourly total
function sumEmployeeHourly(){
  hourlyEmployeeTotals = [];
  for(let j = 0; j < openHours.length; j++){
    let sum = 0;
    for(let i = 0; i < everyLocation.length; i++){
      sum += everyLocation[i].employeeArray[j];
    }
    hourlyEmployeeTotals.push(sum);
  }
}

function renderEmployeeTotals(){
  parentElement = document.getElementById('employees');
  let parentTFoot = document.createElement('tfoot');
  parentTFoot.setAttribute('id', 'employee-table-foot');
  parentElement.appendChild(parentTFoot);
  let parentRow = document.createElement('tr');
  let tableFoot = document.createElement('th');
  tableFoot.textContent = 'Totals ';
  parentRow.appendChild(tableFoot);
  for(let i = 0; i < hourlyTotals.length; i++){
    tableFoot = document.createElement('td');
    tableFoot.textContent = hourlyEmployeeTotals[i];
    parentRow.appendChild(tableFoot);
  }
  parentTFoot.appendChild(parentRow);
}

// Form Handling Code
let formElement = document.getElementById('add-location');

function handleLocationForm(event){
  event.preventDefault();
  parentElement.textContent = '';
  document.getElementById('sales').innerText = '';

  let name = event.target.locationName.value;
  let minCustomers = Number(event.target.minimum.value);
  let maxCustomers = Number(event.target.maximum.value);
  let cookiesPerCustomer = Number(event.target.cookiesPerCustomer.value);
  new CookieStoreLocation(name, minCustomers, maxCustomers, cookiesPerCustomer);
  console.log(everyLocation);
  pageRenderer();
}

////////////////////////////// Running Code /////////////////////////////
// Instantiating the classes
// I am ignoring eslint since I am not calling on these objects directly.
let seattleLocation = new CookieStoreLocation('Seattle', 23, 65, 6.3); //eslint-disable-line
let tokyoLocation = new CookieStoreLocation('Tokyo', 3, 24, 1.2); //eslint-disable-line
let dubaiLocation = new CookieStoreLocation('Dubai', 11, 38, 3.7); //eslint-disable-line
let parisLocation = new CookieStoreLocation('Paris', 20, 38, 2.3); //eslint-disable-line
let limaLocation = new CookieStoreLocation('Lima', 2, 16, 4.6); //eslint-disable-line


// One function to render all.
function pageRenderer(){
  renderTableHead('sales');
  // Render All the table rows
  function renderAllSalesTableData(){
    for(let i = 0; i < everyLocation.length; i++){
      everyLocation[i].renderSalesTableData();
    }
  }
  renderAllSalesTableData();
  // Have to call sumSalesHourly after the classes have been rendered
  sumSalesHourly();
  renderTotals();

  //Render Employee Table
  renderTableHead('employees');
  function renderAllEmployeeTableData(){
    for(let i = 0; i < everyLocation.length; i++){
      everyLocation[i].renderEmployeeTableData();
    }
  }
  // Rendering the Employee Table
  renderAllEmployeeTableData();
  sumEmployeeHourly();
  renderEmployeeTotals();
}
pageRenderer();

//Form Event Listener
formElement.addEventListener('submit', handleLocationForm);

