// select all the buttons
let buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
let display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  let clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  } else {
    // otherwise link it to the display
    display.value += clickedButtonValue;
  }
}