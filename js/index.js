import controlers from "./controlers.js"
const play = document.querySelector(".play")
const timer = document.querySelector(".timer")
const speaker = document.querySelector(".speaker")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const mode = document.querySelector(".modeMoon")

const control = controlers({play, timer, speaker, minutesDisplay, secondsDisplay, mode})
play.addEventListener("click", control.funPlay)
timer.addEventListener("click", control.funTimer)
speaker.addEventListener("click", control.funSpeaker)
mode.addEventListener("click", control.funMode)





