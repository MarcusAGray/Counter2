const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")

const counterDisplay = document.getElementById("counterDisplay")


decreaseBtn.addEventListener("click", function(){
  counterDisplay.textContent = getCurrentNum() - 1
})

resetBtn.addEventListener("click", function(){
  counterDisplay.textContent = 0
})

increaseBtn.addEventListener("click", function(){
  counterDisplay.textContent = getCurrentNum() + 1
})

//Gets the current number being diplayed and returns
//the numerical value
function getCurrentNum() {
  return parseInt(counterDisplay.textContent)
}