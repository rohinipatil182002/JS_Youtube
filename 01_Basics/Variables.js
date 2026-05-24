const accountId=1234
let accountEmail="rohini18@gmail.com"
var accountPassword="Pass@123"
let accountState;

//accountId=5678;  //not allow
accountEmail="vivek08@gmail.com"
accountPassword="Password@123"
accountCity="Bangluru"

console.log("AccountId Is : "+ accountId)
console.log("AccountEmail Is : ", accountEmail);
console.log("AccountPassword Is : ", accountPassword);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* prefer to use let and const 
not use var 
because of issue in block scope and functional scope*/

