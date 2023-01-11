"use strict";
exports.__esModule = true;
var message = 'hello world';
console.log(message);
console.log(message.length);
if (message.length === 3) {
    console.log("Three characters");
}
else {
    console.log('too many characters');
}
message.length > 3 ? console.log("More than two characters") : console.log("Less than three chacters");
