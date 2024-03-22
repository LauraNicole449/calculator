let displayValue = '';

//Add Events click in all button
let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click',(e)=>{
    let resetBtns = "reset" == e.target.id;
    let resultBtns = "result" == e.target.id;
    let deleteBtns = "delete" == e.target.id;
    
    if(deleteBtns || resetBtns){
      clearDisplay();
    }
    else if(resultBtns){
      calculate();
    }
    else{
      appendToDisplay(e.target.id);
    }
  })
}

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result-display').value = displayValue;
}

function calculate() {
  try {
    const result = new Function('return ' + displayValue)();
    displayValue = result.toString(); // Convierte el resultado a cadena
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
  let buttons = document.getElementsByClassName('buttons button');
  let deleteButton = document.getElementById("delete");
  let resetButton = document.getElementById("reset");
  let resultButton = document.getElementById("result");
  
  switch (option) {
    case 1:
      if (buttonTheme) {
        buttonTheme.style.left = "0px";
        body.style.backgroundColor = "#3b4664";
        themeChangeBack.style.backgroundColor = "#252d44";
        buttonTheme.style.backgroundColor = "#d73b34";
        resultDisplay.style.backgroundColor = "#181f32"
        resultDisplay.style.color = "white";
        calBack.style.backgroundColor = "#252d44";
        for(i=0;i<buttons.length;i++){
          buttons[i].style.backgroundColor = "#eae3db";
          buttons[i].style.border = "#a79e90";
        }
        deleteButton.style.backgroundColor = "#647299";
        resetButton.style.backgroundColor = "#647299";
        resultButton.style.backgroundColor = "#d13f30";
        resetButton.style.color = "white";
        option = 2; 
      break;
      }
    case 2:
      if (buttonTheme) {
        buttonTheme.style.left = "28px";
        body.style.backgroundColor = "#e6e6e6";
        themeChangeBack.style.backgroundColor = "#d3cdcd";
        buttonTheme.style.backgroundColor = "#c8570a";
        resultDisplay.style.backgroundColor = "rgb(206 206 206)"
        resultDisplay.style.color = "#35372c";
        calBack.style.backgroundColor = "#d4cdcd";
        for(i=0;i<buttons.length;i++){
          buttons[i].style.backgroundColor = "#e5e4e0";
          buttons[i].style.border = "#a79e90";
        }
        deleteButton.style.backgroundColor = "#647299";
        resetButton.style.backgroundColor = "#647299";
        resultButton.style.backgroundColor = "#d13f30";
        option = 3; 
      } 
      break;
    case 3:
      if (buttonTheme) {
        buttonTheme.style.left = "55px";
        body.style.backgroundColor = "#17062a";
        themeChangeBack.style.backgroundColor = "rgb(42 11 76)";
        buttonTheme.style.backgroundColor = "#00d8ce";
        resultDisplay.style.backgroundColor = "rgb(55 14 100)"
        resultDisplay.style.color = "#fde03c";
        calBack.style.backgroundColor = "rgb(43 21 67)";
        for(i=0;i<buttons.length;i++){
          buttons[i].style.backgroundColor = "#331b4d";
          buttons[i].style.border = "#851c9d";
        }
        deleteButton.style.backgroundColor = "#56077c";
        resetButton.style.backgroundColor = "#56077c";
        resultButton.style.backgroundColor = "#00decf";
        result.style.color = "black";
        option = 1; 
      } 
      break;
  }
}
