"use strict";
//0. Dom
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

//4. Create an array of special characters
const specialChars = ["%", "*", "/", "+", "="];
//5. make the 'output' empty
let output = ""

//3. Define function to calculate based on button clicked
const calculate = (btnValue) => {
  //7.the if statement ref to the '='
  if(btnValue == "=" && output !== "") {
    //8. if output has '%' before evaluating
    output = eval(output.replace("%", "/100"))
  }else if(btnValue === "AC") {
    output =""
  }else if(btnValue === "DEL") {
    //9. If DEL, remove the last Output
    output = output.toString().slice(0, -1)
  }else {
    if(output === "" && specialChars.includes(btnValue)) 
    return; output += btnValue
  }
  //6. make the display value output
  display.value = output;
}


//1. Add event listener to button, call calculator() on click
buttons.forEach((button) => {
  //2. button click listener calls calculator() with dataset value as argument.
  button.addEventListener("click", e => calculate(e.target.dataset.value));
})

