var myName = "Alshaimaa"
var age = 23
var studentOrNot = false
console.log(myName ,age , studentOrNot )
document.getElementById("myname").innerHTML +=myName
document.getElementById("age").innerHTML +=age
document.getElementById("studentOrNot").innerHTML +=studentOrNot
var number1 = 10 , number2 = 5
document.getElementById("sum").innerHTML +=number1+number2
document.getElementById("def").innerHTML +=number1-number2
document.getElementById("product").innerHTML += number1*number2
document.getElementById("divided").innerHTML +=number1/number2
document.getElementById("remender").innerHTML +=number1%number2
var number = prompt("enter the number to check")
if (number < 0){
    console.log("number is negative");
}else if (number >0){
    console.log("number is positive")
}else{
    console.log("number is zero")
}
var personAge = prompt("enter your Age")
if (personAge < 18 && personAge > 0){
    console.log("person isn\'t eligible to vote");
}else if (personAge >=18 ){
    console.log("person is eligible to vote")
}else{
    console.log("envalid age")
}
var day = prompt("enter the day")
switch (day){
    case "Saturday":
    case "Sunday":
        console.log("weekend")
        break;
     case "Monday":
     case "Tuesday":
     case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Workday")
        break
    default:
       console.log("uncorrect day")
}