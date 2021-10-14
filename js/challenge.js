let timer 
let isActive = true;
const counter = document.getElementById("counter");
const comments = document.querySelector("#list")
const commentForm = document.querySelector('#comment-form')
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.querySelector('#heart')
const pause = document.querySelector("#pause")
const likes = document.querySelector(".likes")

document.addEventListener("DOMContentLoaded", startTimer)
plus.addEventListener("click", increase)
minus.addEventListener("click", decrease)
commentForm.addEventListener("submit", displayComment)
heart.addEventListener("click", addLike)
pause.addEventListener("click", pauseOrResume)

function startTimer(){
timer = setInterval(increase, 1000)
};

function increase() {
  const currentcounter = parseInt(counter.innerText,10)
  counter.textContent = `${currentcounter + 1}`
}
function decrease(){
  const currentcounter = parseInt(counter.innerText,10)
  if(currentcounter>0)
    counter.textContent = `${currentcounter - 1}`
}

function displayComment(event){
  event.preventDefault()
  const commentFormData = new FormData(event.target);
  const commentText = commentFormData.get("comment");

  const p = document.createElement("p")
    p.innerText = commentText
    comments.append(p)
    event.target.reset()
}
 
function addLike(){
  const currentcounter = parseInt(counter.innerText,10)

  const previousLikes = Array.from(likes.children);
  const previousLike = previousLikes.find(previousLike => {
    const previousLikeCount = parseInt(previousLike.textContent.split(" ")[0], 10);
    return previousLikeCount === currentcounter
  })

if (previousLike){
  const  previousHeartText = previousLike.textContent.split(" ").slice(-2)[0]
  const numberOfHearts = parseInt(previousHeartText, 10)
   previousLike.textContent = `${currentcounter} has been liked ${numberOfHearts + 1} times`
}else{

const newLike = document.createElement("li")
  newLike.textContent = `${currentcounter} has been liked 1 time`
  likes.append(newLike)
}}

function pauseOrResume() {
  const button = Array.from(document.querySelectorAll("button"))
  const noPauseButton = button.filter(button => button.id !== "pause")
  if(isActive){
  clearInterval(timer)
  pause.textContent = "resume"
  isActive = false
} else {
  startTimer();
  pause.textContent = "pause"
  isActive = true
}
toogleActivities(noPauseButton)
}
function toogleActivities(noPauseButton){
  noPauseButton.forEach(button => button.disable = isActive);
  isActive = !isActive
}