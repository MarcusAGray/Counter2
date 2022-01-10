const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")

const counterDisplay = document.getElementById("counterDisplay")

//Event listeners for mouse hovers
decreaseBtn.addEventListener("mouseover", function(){
  decreaseBtn.style.backgroundColor = "#3e4444"
  decreaseBtn.style.color = "lightgray"
})

decreaseBtn.addEventListener("mouseout", function(){
  decreaseBtn.style.backgroundColor = "rgb(246, 247, 232)";
  decreaseBtn.style.color = "black"
})

resetBtn.addEventListener("mouseover", function(){
  resetBtn.style.backgroundColor = "#3e4444"
  resetBtn.style.color = "lightgray"
})

resetBtn.addEventListener("mouseout", function(){
  resetBtn.style.backgroundColor = "rgb(246, 247, 232)";
  resetBtn.style.color = "black"
})

increaseBtn.addEventListener("mouseover", function(){
  increaseBtn.style.backgroundColor = "#3e4444"
  increaseBtn.style.color = "lightgray"
})

increaseBtn.addEventListener("mouseout", function(){
  increaseBtn.style.backgroundColor = "rgb(246, 247, 232)";
  increaseBtn.style.color = "black"
})


//Event Listeners for clicks
decreaseBtn.addEventListener("click", function(){
  counterDisplay.textContent = getCurrentNum() - 1
  setCounterColor();
})

resetBtn.addEventListener("click", function(){
  counterDisplay.textContent = 0
  setCounterColor();//better to call function or just set color here for reset?
})

increaseBtn.addEventListener("click", function(){
  counterDisplay.textContent = getCurrentNum() + 1
  setCounterColor();
})

//Gets the current number being diplayed and returns
//the numerical value
function getCurrentNum() {
  return parseInt(counterDisplay.textContent)
}

//Set color of counter display text depending 
//on whether counter is above, equal to, or below
//0. Called after user increases, decreases or resets
//counter
function setCounterColor() {
  let counter = getCurrentNum();
  if (counter > 0){
    counterDisplay.style.color = "green";
  }
  else if (counter === 0){
    counterDisplay.style.color = "black";
  }
  else {
    counterDisplay.style.color = "red";
  }
}