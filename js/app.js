'use strict';

//random number test
function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - (min +1))) + min;
}

//Generate the hours array
function hoursArrayGenerator(open, close){
  let outputArray = [];
  close += 12;
  let totalHoursOpen = close-open;
  for(let i = 0; i < totalHoursOpen; i++){
    let hour = i + open;
    if (hour < 12){
      outputArray.push(`${hour}am`);
    } else {
      hour -= 12;
      outputArray.push(`${hour}pm`);
    }
  }
  return outputArray;
}

let openHours = hoursArrayGenerator(6,8);
// console.log(openHours);

// Define seattle object
var seattleLocation = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPurchasedPerCustomer: 6.3,
  hoursArray: openHours,
  customerArray: [],
  cookieArray: [],
  totalCookiesPerday: 0,

  // Fill customerArray with random number of customers
  customersEachHour: function(){
    for(let i = 0; i < this.hoursArray.length; i++){
      this.customerArray.push(getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },

  // Fill cookieArray with cookies each hour (rounded up).
  averageCookiesPurchasedPerHour: function(){
    for(let i = 0; i < this.customerArray.length; i++){
      let wholeCookiesSoldPerHour = Math.ceil(this.customerArray[i] * this.averageCookiesPurchasedPerCustomer);
      this.cookieArray.push(wholeCookiesSoldPerHour);
      this.totalCookiesPerday += wholeCookiesSoldPerHour;
    }
  },

  // Render the list items and include the total
  renderLi: function(){
    for(let i = 0; i < this.hoursArray.length; i++){
      let amOrPm = 'am';
      let open = (i + 6);
      if(open > 12){
        open = open - 12;
        amOrPm = 'pm';
      }
      var parentElement = document.getElementById('seattle');
      var listItem = document.createElement('li');
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]} cookies`;
      parentElement.appendChild(listItem);
    }
    parentElement = document.getElementById('seattle');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookiesPerday} cookies`;
    parentElement.appendChild(document.createElement('br'));
    parentElement.appendChild(listItem);
  },
};




//Define Tokyo Object
var tokyoLocation = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averageCookiesPurchasedPerCustomer: 1.2,
  hoursArray: openHours,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random number of customers
  customersEachHour: function(){
    for(let i = 0; i < this.hoursArray.length; i++){
      this.customerArray.push(getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },

  // Fill cookieArray with cookies each hour (rounded up).
  averageCookiesPurchasedPerHour: function(){
    for(let i = 0; i < this.customerArray.length; i++){
      let wholeCookiesSoldPerHour = Math.ceil(this.customerArray[i] * this.averageCookiesPurchasedPerCustomer);
      this.cookieArray.push(wholeCookiesSoldPerHour);
      this.totalCookiesPerday += wholeCookiesSoldPerHour;
    }
  },

  // Render the list items and include the total
  renderLi: function(){
    for(let i = 0; i < this.hoursArray.length; i++){
      let amOrPm = 'am';
      let open = (i + 6);
      if(open > 12){
        open = open - 12;
        amOrPm = 'pm';
      }
      var parentElement = document.getElementById('seattle');
      var listItem = document.createElement('li');
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]} cookies`;
      parentElement.appendChild(listItem);
    }
    parentElement = document.getElementById('seattle');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookiesPerday} cookies`;
    parentElement.appendChild(document.createElement('br'));
    parentElement.appendChild(listItem);
  },
};

// Define Dubai Object
var dubaiLocation = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  averageCookiesPurchasedPerCustomer: 3.7,
  hoursArray: openHours,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random number of customers
  customersEachHour: function(){
    for(let i = 0; i < this.hoursArray.length; i++){
      this.customerArray.push(getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },

  // Fill cookieArray with cookies each hour (rounded up).
  averageCookiesPurchasedPerHour: function(){
    for(let i = 0; i < this.customerArray.length; i++){
      let wholeCookiesSoldPerHour = Math.ceil(this.customerArray[i] * this.averageCookiesPurchasedPerCustomer);
      this.cookieArray.push(wholeCookiesSoldPerHour);
      this.totalCookiesPerday += wholeCookiesSoldPerHour;
    }
  },

  // Render the list items and include the total
  renderLi: function(){
    for(let i = 0; i < this.hoursArray.length; i++){
      let amOrPm = 'am';
      let open = (i + 6);
      if(open > 12){
        open = open - 12;
        amOrPm = 'pm';
      }
      var parentElement = document.getElementById('seattle');
      var listItem = document.createElement('li');
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]} cookies`;
      parentElement.appendChild(listItem);
    }
    parentElement = document.getElementById('seattle');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookiesPerday} cookies`;
    parentElement.appendChild(document.createElement('br'));
    parentElement.appendChild(listItem);
  },
};

// Define Paris Object
var parisLocation = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  averageCookiesPurchasedPerCustomer: 2.3,
  hoursArray: openHours,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random number of customers
  customersEachHour: function(){
    for(let i = 0; i < this.hoursArray.length; i++){
      this.customerArray.push(getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },

  // Fill cookieArray with cookies each hour (rounded up).
  averageCookiesPurchasedPerHour: function(){
    for(let i = 0; i < this.customerArray.length; i++){
      let wholeCookiesSoldPerHour = Math.ceil(this.customerArray[i] * this.averageCookiesPurchasedPerCustomer);
      this.cookieArray.push(wholeCookiesSoldPerHour);
      this.totalCookiesPerday += wholeCookiesSoldPerHour;
    }
  },

  // Render the list items and include the total
  renderLi: function(){
    for(let i = 0; i < this.hoursArray.length; i++){
      let amOrPm = 'am';
      let open = (i + 6);
      if(open > 12){
        open = open - 12;
        amOrPm = 'pm';
      }
      var parentElement = document.getElementById('seattle');
      var listItem = document.createElement('li');
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]} cookies`;
      parentElement.appendChild(listItem);
    }
    parentElement = document.getElementById('seattle');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookiesPerday} cookies`;
    parentElement.appendChild(document.createElement('br'));
    parentElement.appendChild(listItem);
  },
};

// Define Lima Object
var limaLocation = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  averageCookiesPurchasedPerCustomer: 4.6,
  hoursArray: openHours,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random number of customers
  customersEachHour: function(){
    for(let i = 0; i < this.hoursArray.length; i++){
      this.customerArray.push(getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },

  // Fill cookieArray with cookies each hour (rounded up).
  averageCookiesPurchasedPerHour: function(){
    for(let i = 0; i < this.customerArray.length; i++){
      let wholeCookiesSoldPerHour = Math.ceil(this.customerArray[i] * this.averageCookiesPurchasedPerCustomer);
      this.cookieArray.push(wholeCookiesSoldPerHour);
      this.totalCookiesPerday += wholeCookiesSoldPerHour;
    }
  },

  // Render the list items and include the total
  renderLi: function(){
    for(let i = 0; i < this.hoursArray.length; i++){
      let amOrPm = 'am';
      let open = (i + 6);
      if(open > 12){
        open = open - 12;
        amOrPm = 'pm';
      }
      var parentElement = document.getElementById('seattle');
      var listItem = document.createElement('li');
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]} cookies`;
      parentElement.appendChild(listItem);
    }
    parentElement = document.getElementById('seattle');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${this.totalCookiesPerday} cookies`;
    parentElement.appendChild(document.createElement('br'));
    parentElement.appendChild(listItem);
  },
};

// generate the arrays and renders the lists
function locationBuilder(location){
  location.customersEachHour();
  location.averageCookiesPurchasedPerHour();
  location.renderLi();
}

//Seattle:
locationBuilder(seattleLocation);
//Tokyo:
locationBuilder(tokyoLocation);
//Dubai:
locationBuilder(dubaiLocation);
//Paris:
locationBuilder(parisLocation);
//Lima:
locationBuilder(limaLocation);

console.log(seattleLocation.hoursArray);
