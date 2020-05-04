'use strict';

//random number test
function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - (min +1))) + min;
}

// function customersEachHour(object){
//   let finalArray = [];
//   for(let i = 0; i < object.hoursOpen; i++){
//     let x = getRandomNumber(object.minCustomersPerHour, object.maxCustomersPerHour);
//     finalArray.push(x);
//   }
//   console.log('help: ' + finalArray);
//   return finalArray;
// }

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
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random numeber of customers
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
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]}`;
      parentElement.appendChild(listItem);
      total+=this.cookieArray[i];
    }
    parentElement = document.getElementById('seattle');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${total}`;
    parentElement.appendChild(listItem);
  },
};




//Define Tokyo Object
var seattleLocation = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPurchasedPerCustomer: 6.3,
  hoursOpen: 14,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random numeber of customers
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
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]}`;
      parentElement.appendChild(listItem);
      total+=this.cookieArray[i];
    }
    parentElement = document.getElementById('seattle');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${total}`;
    parentElement.appendChild(listItem);
  },
};

// Define Dubai Object
var seattleLocation = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPurchasedPerCustomer: 6.3,
  hoursOpen: 14,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random numeber of customers
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
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]}`;
      parentElement.appendChild(listItem);
      total+=this.cookieArray[i];
    }
    parentElement = document.getElementById('seattle');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${total}`;
    parentElement.appendChild(listItem);
  },
};

// Define Paris Object
var seattleLocation = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPurchasedPerCustomer: 6.3,
  hoursOpen: 14,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random numeber of customers
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
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]}`;
      parentElement.appendChild(listItem);
      total+=this.cookieArray[i];
    }
    parentElement = document.getElementById('seattle');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${total}`;
    parentElement.appendChild(listItem);
  },
};

// Define Lima Object
var seattleLocation = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPurchasedPerCustomer: 6.3,
  hoursOpen: 14,
  customerArray: [],
  cookieArray: [],

  // Fill customerArray with random numeber of customers
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
      listItem.textContent = `${open}${amOrPm}: ${this.cookieArray[i]}`;
      parentElement.appendChild(listItem);
      total+=this.cookieArray[i];
    }
    parentElement = document.getElementById('seattle');
    listItem = document.createElement('li');
    listItem.textContent = `Total: ${total}`;
    parentElement.appendChild(listItem);
  },
};


//Seattle: generate the arrays and the lists
seattleLocation.customersEachHour();
seattleLocation.averageCookiesPurchasedPerHour();
seattleLocation.renderLi();

//