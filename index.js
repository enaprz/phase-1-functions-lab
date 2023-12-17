// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
return Math.abs(someValue - 42);
}
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)* 264;
}
function distanceTravelledInFeet(num1, num2){
    return Math.abs(num1 - num2)*264
}
function calculatesFarePrice(num1, num2){
    const distance = distanceTravelledInFeet(num1, num2);
if (distance < 400){
    return 0;
}
else if (distance >= 400 && distance <  2000){
    return 2.56 ;
}
else if (distance > 2000 && distance <= 2500){
    return 25 ;
}
else {
    return 'cannot travel that far'
}
}