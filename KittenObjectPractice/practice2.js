


// ************************** THIS CODE IS FROM LAB 06 IN CODE 201!! EXAMPLE OF OBJECT LITERAL AND WILL BE HERE IN CASE OF EMERGENCY, REFERENCE, AND PRACTICE!!*************************************

// let seattle = {
//   city: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieBought: 6.3, 

//   // This is called a helper function
//   randomCustomerPerHour: function()
//   {
//     return Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
//   },
//     // This Code was from mdn webdocs
//   cookiesBoughtPerHour: [], 
//   totalDailyCookies: 0,
//   // Create a for loop 

//   cookiesHour: function(){ for(let i = 0; i < hours.length; i++)
//     {
//       //  using avg and randCust - calc a number calculated number: avgCookieBought * randomcustomer
//       let simCookies = Math.ceil(this.avgCookieBought * this.randomCustomerPerHour());
//       // add that calculation to the array by using this.cookiesBoughtPerHour.push(calculated number)
//       this.cookiesBoughtPerHour.push(simCookies);
//       // Add all of the cookies together.
//       this.totalDailyCookies += simCookies;
//     }
//   },
// // Rendering itself to the HTML Document: Dom Manipulation pt 2

// render: function(){
//   this.cookiesHour();
//   // CREATING ARTICLE:
//   let articleElem = document.createElement('article');
//   console.log(this.cookiesBoughtPerHour);
//   // Adding this to the HTML document:
//   cookiesSale.appendChild(articleElem);

//   // CREATING H2
//   let h2Elem = document.createElement('h2');

//   // Adding: The City name
//   h2Elem.textContent = this.city;
//   articleElem.appendChild(h2Elem);

//   let ulElem = document.createElement('ul');
//   articleElem.appendChild(ulElem);

//   for(let i = 0; i < this.cookiesBoughtPerHour.length; i++){
//     let liElem = document.createElement('li');
//     liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} Cookies!`;
//     ulElem.appendChild(liElem);
//   }
  
//   let liElem = document.createElement('li');
//   liElem.textContent = `Total: ${this.totalDailyCookies} Cookies!`;
//   ulElem.appendChild(liElem);

//   }

// };

// console.log(seattle.randomCustomerPerHour());
// console.log(seattle.cookiesHour);
// console.log(seattle.cookiesBoughtPerHour);
// console.log(seattle.totalDailyCookies);

// seattle.randomCustomerPerHour();
// seattle.render();
// console.log(seattle);


// let Tokyo = {
//   city1: 'Tokyo',
//   minCustomer1: 3,
//   maxCustomer1: 24,
//   avgCookieBought1: 1.2,
//   randomCustomerPerHour1: function()
//   {
//     return Math.floor(Math.random() * (this.maxCustomer1 - this.minCustomer1 + 1) + this.minCustomer1);
//   },

//   cookiesBoughtPerHour1: [],
//   totalDailyCookies1: 0,

//   cookiesHour1: function()
//   {
//     for(let i = 0; i < hours.length; i++)
//     {
//       let simCookies1 = Math.ceil(this.avgCookieBought1 *this.randomCustomerPerHour1());
//       this.cookiesBoughtPerHour1.push(simCookies1);
//       this.totalDailyCookies1 += simCookies1; 
//     }
//   },

//   // Render
//   render: function(){
//     this.cookiesHour1();
//     let articleElem = document.createElement('article');
//     console.log(this.cookiesBoughtPerHour1);
//     cookiesSale.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city1;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBoughtPerHour1.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour1[i]} Cookies!`;
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalDailyCookies1} Cookies`;
//     ulElem.appendChild(liElem);


//   }

// };

// Tokyo.randomCustomerPerHour1();
// Tokyo.render();
// console.log(Tokyo);


// let Dubai = {
//   city2: 'Dubai',
//   minCustomer2: 11,
//   maxCustomer2: 38,
//   avgCookieBought2: 3.7,
//   randomCustomerPerHour2: function()
//   {
//     return Math.floor(Math.random() * (this.maxCustomer2 - this.minCustomer2 + 1) + this.minCustomer2);
//   },

//   cookiesBoughtPerHour2: [],
//   totalDailyCookies2: 0,

//   cookiesHour2: function()
//   {
//     for(let i = 0; i < hours.length; i++)
//     {
//       let simCookies2 = Math.ceil(this.avgCookieBought2 *this.randomCustomerPerHour2());
//       this.cookiesBoughtPerHour2.push(simCookies2);
//       this.totalDailyCookies2 += simCookies2; 
//     }
//   },

//   // Render
//   render: function(){
//     this.cookiesHour2();
//     let articleElem = document.createElement('article');
//     console.log(this.cookiesBoughtPerHour2);
//     cookiesSale.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city2;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBoughtPerHour2.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour2[i]} Cookies!`;
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalDailyCookies2} Cookies`;
//     ulElem.appendChild(liElem);


//   }

// };

// Dubai.randomCustomerPerHour2();
// Dubai.render();
// console.log(Dubai);



// let Paris = {
//   city3: 'Paris',
//   minCustomer3: 20,
//   maxCustomer3: 38,
//   avgCookieBought3: 2.3,
//   randomCustomerPerHour3: function()
//   {
//     return Math.floor(Math.random() * (this.maxCustomer3 - this.minCustomer3 + 1) + this.minCustomer3);
//   }, 

//   cookiesBoughtPerHour3: [],
//   totalDailyCookies3: 0,

//   cookiesHour3: function(){
//     for(let i = 0; i < hours.length; i++)
//     {
//       let simCookies3 = Math.ceil(this.avgCookieBought3 *this.randomCustomerPerHour3());
//       this.cookiesBoughtPerHour3.push(simCookies3);
//       this.totalDailyCookies3 += simCookies3; 
//     }
//   },

//   render: function(){
//     this.cookiesHour3();
//     let articleElem = document.createElement('article');
//     console.log(this.cookiesBoughtPerHour3);
//     cookiesSale.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city3;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBoughtPerHour3.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour3[i]} Cookies!`;
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalDailyCookies3} Cookies`;
//     ulElem.appendChild(liElem);


//   }

// };

// Paris.randomCustomerPerHour3();
// Paris.render();
// console.log(Paris);


// let Lima = {
//   city4: 'Lima',
//   minCustomer4: 2,
//   maxCustomer4: 16,
//   avgCookieBought4: 4.6,
//   randomCustomerPerHour4: function()
//   {
//     return Math.floor(Math.random() * (this.maxCustomer4 - this.minCustomer4 + 1) + this.minCustomer4);
//   },

//   cookiesBoughtPerHour4: [],
//   totalDailyCookies4: 0,

//   cookiesHour4: function()
//   {
//     for(let i = 0; i < hours.length; i++)
//     {
//       let simCookies4 = Math.ceil(this.avgCookieBought4 *this.randomCustomerPerHour4());
//       this.cookiesBoughtPerHour4.push(simCookies4);
//       this.totalDailyCookies4 += simCookies4; 
//     }
//   },

//   // Render
//   render: function(){
//     this.cookiesHour4();
//     let articleElem = document.createElement('article');
//     console.log(this.cookiesBoughtPerHour4);
//     cookiesSale.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city4;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.cookiesBoughtPerHour4.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour4[i]} Cookies!`;
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalDailyCookies4} Cookies`;
//     ulElem.appendChild(liElem);


//   }

// };

// Lima.randomCustomerPerHour4();
// Lima.render();
// console.log(Lima);



//  For lab 07:

 // fucntion createTeableHeader(){
// // create thead
// // create row add the content to row
// }

// function createTableFooter() - standalone function