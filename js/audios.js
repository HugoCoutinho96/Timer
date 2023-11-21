export function audios(){
    const musicPlay = new Audio("./audios/play.mp3")
    const musicEnd = new Audio("./audios/timer end.mp3")
    const musicBg = new Audio("./audios/music.mp3")

    function buttonPlay(){
        musicPlay.play()
    }

    function timerEnd(){
        musicEnd.play()
    }

    function buttonSpeakerMusicOn(){
        musicBg.play()
        musicBg.loop
    }

    function buttonSpeakerMusicOff(){
        musicBg.pause()
    }

    return {buttonPlay, timerEnd, buttonSpeakerMusicOn, buttonSpeakerMusicOff}
}