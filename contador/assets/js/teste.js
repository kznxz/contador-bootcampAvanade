var currentNumberWrapper = document.getElementById('currentNumber');
var resetBtn = document.getElementById('reset');

var currentNumber = 0;


function increment() {
  if (currentNumber < 10) {
    currentNumber ++;
    currentNumberWrapper.innerHTML = currentNumber;
  }
  if(currentNumber > 0 ){
    currentNumberWrapper.style.color= "white";
  }
}

function decrement() {
  if ( -10 < currentNumber ) {
    currentNumber --;
    currentNumberWrapper.innerHTML = currentNumber;
  }
  if(currentNumber < 0){
    currentNumberWrapper.style.color= "red";
}
}

function resetCounter() {
  currentNumber = 0;
  currentNumberWrapper.innerHTML = currentNumber;
  
  if(currentNumber == 0 ){
    currentNumberWrapper.style.color = "white";
  }
}

