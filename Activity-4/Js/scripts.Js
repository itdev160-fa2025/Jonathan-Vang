var user = 'John'; // Change to your desired user name
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest reviews on parts.';

var greetingEl = document.getElementById('greeting');
greetingEl.textContent = greeting;

var price = 60,
    studentDiscount = .5,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);