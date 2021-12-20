// var currentNumberWrapper = document.getElementById('currentNumber');
// var currentNumber = 0;
// function increase() {
//   currentNumber = currentNumber + 1;
//   currentNumberWrapper.innerHTML = currentNumber;
// }

// function decrease() {
//   currentNumber = currentNumber - 1;
//   currentNumberWrapper.innerHTML = currentNumber;
// }

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementById('increase').addEventListener('click', function increase() {
  if(currentNumber < 10) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  } else {
    alert('Limite do contador');
  }
});

document.getElementById('decrease').addEventListener('click', function decrease() {
  if(currentNumber > -10) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
  } else {
    alert('Limite do contador');
  }

  if(currentNumber < 0) {
    document.getElementById('currentNumber').style.color = 'red';
  }
});

