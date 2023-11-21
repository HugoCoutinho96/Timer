import { timerInterval, timerStop } from "./timer.js"
import { audios } from "./audios.js"

const music = audios()

export default function controlers({play, timer, speaker, minutesDisplay, secondsDisplay, mode}){
    let time = "00"

    function funPlay(){
        if(play.classList.contains("pause")){
            play.setAttribute("src", "./assets/play.svg")
            play.classList.remove("pause")
            timerStop()
        }else{
            play.setAttribute("src", "./assets/pause.svg")
            play.classList.add("pause")
            timer.classList.add("stop")
            timer.setAttribute("src", "./assets/stop.svg")
            timerInterval({minutesDisplay, secondsDisplay, funPlay, funTimer})
            music.buttonPlay()
        }
    }
    
    function funTimer(){
        if(timer.classList.contains("stop")){
            timer.setAttribute("src", "./assets/timer.svg")
            timer.classList.remove("stop")
            play.setAttribute("src", "./assets/play.svg")
            play.classList.remove("pause")
            minutesDisplay.textContent = String(time).padStart(2, "0")
            secondsDisplay.textContent = "00"
            timerStop()
        }else{
            const timeBefore = time
            time = Number(prompt("Digite a duração do Timer"))
            time = time ? time : timeBefore
            minutesDisplay.textContent = String(time).padStart(2,"0")
        }
    }
    
    function funSpeaker(){
        if(speaker.classList.contains("speaker-none")){
            speaker.setAttribute("src", "./assets/speaker-none.svg")
            speaker.classList.remove("speaker-none")
            music.buttonSpeakerMusicOff()
        }else{
            speaker.setAttribute("src", "./assets/speaker-high.svg")
            speaker.classList.add("speaker-none")
            music.buttonSpeakerMusicOn()
        }
    }

    function funMode(){
        if(mode.classList.contains("modeMoon")){
            mode.classList.add("modeSun")
            mode.classList.remove("modeMoon")
            mode.setAttribute("src", "./assets/moon.svg")
            styleMode("#d7d7e9", "#222227", "#575757")
        }else{
            mode.classList.add("modeMoon")
            mode.classList.remove("modeSun")
            mode.setAttribute("src", "./assets/sun.svg")
            styleMode("#121214", "#F8F8FC", "#242424")
        }
    }

    function styleMode(bgBody, BgTextTime, bgButtons){
        document.body.style.setProperty("--bg-body",bgBody)
        document.body.style.setProperty("--bg-text-time", BgTextTime)
        document.body.style.setProperty("--bg-buttons", bgButtons)
    }

    return {funPlay, funSpeaker, funTimer, funMode}
}


