const chalk = require("chalk");
const validator = require("validator");

Email = "Numan44@gmail.com";
NotEmail = "HEhehe@taoaco.m";
result  = validator.isEmail(Email);
res  = validator.isEmail(NotEmail);

console.log(result ? chalk.green.inverse(result): chalk.red.inverse(result));
console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));