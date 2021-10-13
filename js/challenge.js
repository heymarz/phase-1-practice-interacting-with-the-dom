let clock = setInterval(myTimer, 1000);
let counter = document.getElementById("counter");

//counts up 1 second 
function myTimer() {
counter.innerText++
}

//can manually manipulate plus and minus buttons
document.getElementById("minus").addEventListener("click", decrease)
function decrease(){
counter.innerText--
}
document.getElementById("plus").addEventListener("click", myTimer)

  //like an individual number & see the count of likes with associated num
 
let logLikes = function () {
  let likesCount = document.createElement('li');
  let likes = document.getElementsByClassName("likes")
  likes.appendChild(likesCount)
  likesCount.innerText = [counter.innerText]
}

document.getElementById("heart").onclick = () => {(logLikes())} 


//pause the counter button will also turn off counter, disable all button sexcept the pause button, lable on button from pause to resume,
//restart button for counter
//comment text section