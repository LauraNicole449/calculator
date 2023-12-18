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
  let themeChangeBack = document.getElementById("theme-change");
  let buttonTheme = document.getElementById("theme-change-button");
  let resultDisplay = document.getElementById("result-display");
  let calBack = document.getElementById("calc-background");
  let buttons = document.getElementsByClass("buttons");
  let deleteButton = document.getElementById("delete");
  let resetButton = document.getElementById("reset");
  let resultButton = document.getElementByIf("result");
  
  
  switch (option) {
    case 1:
      if (buttonTheme) {
        buttonTheme.style.left = "0px";
        body.style.backgroundColor = "#3b4664";
        themeChangeBack.style.backgroundColor = "#252d44";
        buttonTheme.style.backgroundColor = "#d73b34";
        resultDisplay.style.color = "#181f32"
        calBack.style.backgroundColor = "#252d44";
        buttons.style.backgroundColor = "#d02d43";
        deleteButton.style.backgroundColor = "#181f32";
        resetButton.style.backgroundColor = "#181f32";
        resultButton.style.backgroundColor = "#181f32";
        option = 2; 
      } else {
        return;
      }
      break;
    case 2:
      if (buttonTheme) {
        buttonTheme.style.left = "28px";
        body.style.backgroundColor = "#3b4664";
        themeChangeBack.style.backgroundColor = "#252d44";
        buttonTheme.style.backgroundColor = "#d73b34";
        resultDisplay.style.color = "#181f32"
        calBack.style.backgroundColor = "#252d44";
        buttons.style.backgroundColor = "#252d44";
        deleteButton.style.backgroundColor = "#181f32";
        resetButton.style.backgroundColor = "#181f32";
        resultButton.style.backgroundColor = "#181f32";
        option = 3; 
      } else {
        return;
      }
      break;
    case 3:
      if (buttonTheme) {
        buttonTheme.style.left = "55px";
        body.style.backgroundColor = "#3b4664";
        themeChangeBack.style.backgroundColor = "#252d44";
        buttonTheme.style.backgroundColor = "#d73b34";
        resultDisplay.style.color = "#181f32"
        calBack.style.backgroundColor = "#252d44";
        buttons.style.backgroundColor = "#252d44";
        deleteButton.style.backgroundColor = "#181f32";
        resetButton.style.backgroundColor = "#181f32";
        resultButton.style.backgroundColor = "#181f32";
        option = 1; 
      } else {
        return;
      }
      break;
  }
}
