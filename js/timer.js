import { audios } from "./audios.js"
const music = audios()

let myTimer
function timerInterval({minutesDisplay, secondsDisplay, funPlay, funTimer}){
    myTimer = setInterval(()=>{
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        if(minutes <= 0 && seconds <= 0){
            timerStop()
            funPlay()
            funTimer()
            music.timerEnd()
            return alert("acabou")
        }
        console.log(`${minutes}:${seconds}`)
        if(seconds <= 0){
            seconds = 60
            minutesDisplay.textContent = String(minutes-1).padStart(2,"0")
        }

        secondsDisplay.textContent = String(seconds-1).padStart(2,"0")
        seconds--
        

    }, 1000)
}

function timerStop(){
    clearInterval(myTimer)
}

export{timerInterval, timerStop}