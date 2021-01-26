// Create a timer using DOM manipulation techniques. The following files are ready to go with some boilerplate code.
console.log("time to start the timer!");

    const countDown = document.querySelector("p");
    const btnDiv = document.querySelector("div");
    let secondsLeft = 60;

    btnDiv.children[0].addEventListener("click", function () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countDown.textContent = "0:" + secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
        }
    
      }, 1000);

      btnDiv.children[1].addEventListener("click", function () {
        clearInterval(timerInterval)
    });
});


btnDiv.children[2].addEventListener("click", function () {
    countDown.textContent = "0:00";
    secondsLeft = 60;
});