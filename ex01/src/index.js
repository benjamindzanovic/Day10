var myPet = {
    species: "Pitt-Bull",
    name: "Tina",
    legs: 4,
    friends: ["Benjo", "Sabina"]
}
function myFunction (myObj){
    return myObj;
}
console.log(myFunction(myPet));
module.exports = {myPet, myFunction };