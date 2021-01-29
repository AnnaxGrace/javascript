// Create a timer using DOM manipulation techniques. The following files are ready to go with some boilerplate code.
console.log("time to start the timer!");

const countDown = document.querySelector("p");
const btnDiv = document.querySelector("div");
let secondsLeft = 60;

//start btn listener
btnDiv.children[0].addEventListener("click", function () {
  //using the setInterval method to add functionality to our timer
  let timerInterval = setInterval(function () {
    secondsLeft--;
    if (secondsLeft < 10) {
      countDown.textContent = "0:0" + secondsLeft;
    } else {
      countDown.textContent = "0:" + secondsLeft;
    }

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      secondsLeft = 60;
    }
  }, 1000);

  //stop btn listener
  btnDiv.children[1].addEventListener("click", function () {
    console.log(timerInterval);
    clearInterval(timerInterval);
  });
});

//reset button listener
btnDiv.children[2].addEventListener("click", function () {
  countDown.textContent = "0:00";
  secondsLeft = 60;
});
