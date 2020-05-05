'use strict';

//random number test
function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - (min +1))) + min;
}

// Define seattle object
var seattleLocation = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPurchasedPerCustomer: 6.3,
  hoursOpen: 14,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random number of customers
  customersEachHour: function(){
    for(let i = 0; i < this.hoursOpen; i++){
      this.customerArray.push(getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },

  // Fill cookieArray with cookies each hour (rounded up).
  averageCookiesPurchasedPerHour: function(){
    for(let i = 0; i < this.customerArray.length; i++){
      this.cookieArray.push(Math.ceil(this.customerArray[i] * this.averageCookiesPurchasedPerCustomer));
    }
  },

  // Render the list items and include the total
  renderLi: function(){
    let total = 0;
    for(let i = 0; i < this.hoursOpen; i++){
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
      total+=this.cookieArray[i];
    }
    parentElement = document.getElementById('seattle');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${total} cookies`;
    parentElement.appendChild(document.createElement('br'));
    parentElement.appendChild(listItem);
  },
};




//Define Tokyo Object
var tokyoLocation = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  averageCookiesPurchasedPerCustomer: 1.2,
  hoursOpen: 14,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random number of customers
  customersEachHour: function(){
    for(let i = 0; i < this.hoursOpen; i++){
      this.customerArray.push(getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },

  // Fill cookieArray with cookies each hour (rounded up).
  averageCookiesPurchasedPerHour: function(){
    for(let i = 0; i < this.customerArray.length; i++){
      this.cookieArray.push(Math.ceil(this.customerArray[i] * this.averageCookiesPurchasedPerCustomer));
    }
  },

  // Render the list items and include the total
  renderLi: function(){
    let total = 0;
    for(let i = 0; i < this.hoursOpen; i++){
      let amOrPm = 'am';
      let open = (i + 6);
      if(open > 12){
        open = open - 12;
        amOrPm = 'pm';
      }
      var parentElement = document.getElementById('tokyo');
      var listItem = document.createElement('li');
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]}`;
      parentElement.appendChild(listItem);
      total+=this.cookieArray[i];
    }
    parentElement = document.getElementById('tokyo');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${total}`;
    parentElement.appendChild(document.createElement('br'));
    parentElement.appendChild(listItem);
  },
};

// Define Dubai Object
var dubaiLocation = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  averageCookiesPurchasedPerCustomer: 3.7,
  hoursOpen: 14,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random number of customers
  customersEachHour: function(){
    for(let i = 0; i < this.hoursOpen; i++){
      this.customerArray.push(getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },

  // Fill cookieArray with cookies each hour (rounded up).
  averageCookiesPurchasedPerHour: function(){
    for(let i = 0; i < this.customerArray.length; i++){
      this.cookieArray.push(Math.ceil(this.customerArray[i] * this.averageCookiesPurchasedPerCustomer));
    }
  },

  // Render the list items and include the total
  renderLi: function(){
    let total = 0;
    for(let i = 0; i < this.hoursOpen; i++){
      let amOrPm = 'am';
      let open = (i + 6);
      if(open > 12){
        open = open - 12;
        amOrPm = 'pm';
      }
      var parentElement = document.getElementById('dubai');
      var listItem = document.createElement('li');
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]}`;
      parentElement.appendChild(listItem);
      total+=this.cookieArray[i];
    }
    parentElement = document.getElementById('dubai');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${total}`;
    parentElement.appendChild(document.createElement('br'));
    parentElement.appendChild(listItem);
  },
};

// Define Paris Object
var parisLocation = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  averageCookiesPurchasedPerCustomer: 2.3,
  hoursOpen: 14,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random number of customers
  customersEachHour: function(){
    for(let i = 0; i < this.hoursOpen; i++){
      this.customerArray.push(getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },

  // Fill cookieArray with cookies each hour (rounded up).
  averageCookiesPurchasedPerHour: function(){
    for(let i = 0; i < this.customerArray.length; i++){
      this.cookieArray.push(Math.ceil(this.customerArray[i] * this.averageCookiesPurchasedPerCustomer));
    }
  },

  // Render the list items and include the total
  renderLi: function(){
    let total = 0;
    for(let i = 0; i < this.hoursOpen; i++){
      let amOrPm = 'am';
      let open = (i + 6);
      if(open > 12){
        open = open - 12;
        amOrPm = 'pm';
      }
      var parentElement = document.getElementById('paris');
      var listItem = document.createElement('li');
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]}`;
      parentElement.appendChild(listItem);
      total+=this.cookieArray[i];
    }
    parentElement = document.getElementById('paris');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${total}`;
    parentElement.appendChild(document.createElement('br'));
    parentElement.appendChild(listItem);
  },
};

// Define Lima Object
var limaLocation = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  averageCookiesPurchasedPerCustomer: 4.6,
  hoursOpen: 14,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random number of customers
  customersEachHour: function(){
    for(let i = 0; i < this.hoursOpen; i++){
      this.customerArray.push(getRandomNumber(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  },

  // Fill cookieArray with cookies each hour (rounded up).
  averageCookiesPurchasedPerHour: function(){
    for(let i = 0; i < this.customerArray.length; i++){
      this.cookieArray.push(Math.ceil(this.customerArray[i] * this.averageCookiesPurchasedPerCustomer));
    }
  },

  // Render the list items and include the total
  renderLi: function(){
    let total = 0;
    for(let i = 0; i < this.hoursOpen; i++){
      let amOrPm = 'am';
      let open = (i + 6);
      if(open > 12){
        open = open - 12;
        amOrPm = 'pm';
      }
      var parentElement = document.getElementById('lima');
      var listItem = document.createElement('li');
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]}`;
      parentElement.appendChild(listItem);
      total+=this.cookieArray[i];
    }
    parentElement = document.getElementById('lima');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${total}`;
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
