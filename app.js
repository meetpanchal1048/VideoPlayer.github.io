const play = document.querySelector(".switch-btn");
const pause = document.querySelector(".switch-btn2");
const video = document.querySelector(".video-container");

play.addEventListener('click',function(){
    video.play();
})

pause.addEventListener('click',function(){
    video.pause();
})