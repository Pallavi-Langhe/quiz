var readlineSync = require('readline-sync');
var score = 0;

var player = readlineSync.question("Enter your name: ")
console.log("Hello " + player + " lets check how well you know your firend");
console.log("--------------------------");

var color = readlineSync.question('My Fav color :');
var ans = 'pink';

console.log(color)
if (color === ans) {
  score = score + 1;
  console.log('score is ' + score);
  var choice = 'Yess you selected correct choice: ' + " " + color;
  console.log(choice)
}
else {
  console.log('score is ' + score);
  console.log('Better luck next time');
}
// fav food
console.log('************************************');

var food = readlineSync.question('My Fav Food item :');
var ans = 'palak';

console.log(food)
if (food === ans) {
  score = score + 1;
  console.log('score is ' + score);
  var choice = 'Yess you selected correct choice: ' + " " + food;
  console.log(choice)
}
else {
  console.log('score is ' + score);
  console.log('Better luck next time');
}
// fav company
console.log('************************************');

var company = readlineSync.question('My Fav company :');
var ans = 'google';

console.log(company)
if (company === ans) {
  score = score + 1;
  console.log('score is ' + score);
  var choice = 'Yess you selected correct choice: ' + " " + company;
  console.log(choice)
}
else {
  console.log('score is ' + score);
  console.log('Better luck next time');
}
// fav Fruit
console.log('************************************');

var fruit = readlineSync.question('My Fav Fruit :');
var ans = 'apple';

console.log(fruit)
if (fruit === ans) {
  score = score + 1;
  console.log('score is ' + score);
  var choice = 'Yess you selected correct choice: ' + " " + fruit;
  console.log(choice)
}
else {
  console.log('score is ' + score);
  console.log('Better luck next time');
}
// fav city
console.log('************************************');

var city = readlineSync.question('My Fav City :');
var ans = 'pune';

console.log(city)
if (city === ans) {
  score = score + 1;
  console.log('score is ' + score);
  var choice = 'Yess you selected correct choice: ' + " " + city;
  console.log(choice)
}
else {
  console.log('score is ' + score);
  console.log('Better luck next time');
}
console.log('Your Final score is ' + score);
