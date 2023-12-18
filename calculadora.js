let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result-display').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('result-display').value = displayValue;
  } catch (error) {
    document.getElementById('result-display').value = 'Error';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result-display').value = displayValue;
}


let option = 2;

function changeTheme(){
  let body = document.getElementById("body");
  let buttonTheme = document.getElementById("theme-change-button");
  let calBack = document.getElementById("calc-background"); 
  
  
  switch (option) {
    case 1:
      if (button) {
        button.style.left = "0px";
        body.style.backgroundColor = "#3b4664";
        buttonTheme.style.backgroundColor = "#d73b34";
        calBack.style.backgroundColor = "";
        option = 2; 
      } else {
        return;
      }
      break;
    case 2:
      if (button) {
        button.style.left = "28px";
        body.style.backgroundColor = "#e6e6e6";
        calBack.style.backgroundColor = "red";
        option = 3; 
      } else {
        return;
      }
      break;
    case 3:
      if (button) {
        button.style.left = "55px";
        calBack.style.backgroundColor = "white";
        option = 1; 
      } else {
        return;
      }
      break;
  }
}