var lastScrollTop = 0;
window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        console.log("scroll down")
    } else {
        console.log("scroll up")
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

let $ = document.querySelector.bind(document)

// all variables
let video = document.getElementById("video")
let videoCon = document.querySelector(".videoContainer")
let buttonFullscreen = document.getElementById("fullscreen")
let slider = document.getElementById("volume");
let playAndPause = document.getElementById("playAndPause")
let playIcon = document.getElementById("playIcon")
let allVideo = document.querySelectorAll("video")


// all Event Listeners
playAndPause.addEventListener("click", vPlayAndPause)
buttonFullscreen.addEventListener("click", vFullscreen)
videoCon.addEventListener("dblclick", fullVideo)
video.addEventListener("dblclick", exitFullScreen)

function fullVideo() {
    video.requestFullscreen()
}

function exitFullScreen() {
    video.exit
}


video.onwaiting = function () {
    document.getElementById("loading").innerHTML = "<img src='https://i.gifer.com/ZZ5H.gif'/>"
};
video.onplaying = function () {
    document.getElementById("loading").innerHTML = ""
};

// video play and pause functions
function vPlayAndPause() {
    playAndPause.classList.toggle("playing")
    if (playAndPause.classList.contains("playing")) {
        video.play()
        playAndPause.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
    } else {
        video.pause()
        playAndPause.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
    }
}

if (video.ended) {
    playAndPause.innerHTML = '<i class="fa fa-refresh" aria-hidden="true"></i>'
}

// video full screen and full screen exit functions
function fullClose() {
    video.closeFullscreen()
}

function vFullscreen() {
    video.requestFullscreen()
}


// video timebar and video duration 
slider.oninput = function () {
    let audioVol = this.value / 100
    video.volume = audioVol
}

const progress = document.getElementById("poregressWidht");
const timer = document.getElementById("timer");

function progressLoop() {
    setInterval(function () {
        let videoDuration = video.duration / 60
        progress.style.width = Math.ceil((video.currentTime / video.duration) * 100) + "%";
        timer.innerHTML = Math.round(video.currentTime) + " sec " + videoDuration;
    });
}
video.addEventListener("play", progressLoop);

// video playback speed

let vidSpeed25 = document.getElementById("speedValue-0.25")
let vidSpeed50 = document.getElementById("speedValue-0.50")
let vidSpeed75 = document.getElementById("speedValue-0.75")
let vidSpeedNormal = document.getElementById("speedValue-normal")
let vidSpeed125 = document.getElementById("speedValue-1.25")
let vidSpeed150 = document.getElementById("speedValue-1.50")
let vidSpeed175 = document.getElementById("speedValue-1.75")
let vidSpeed200 = document.getElementById("speedValue-2.00")
let vidSpeed400 = document.getElementById("speedValue-4.00")

vidSpeed25.addEventListener("click", vidPlayingSpeed25)
vidSpeed50.addEventListener("click", vidPlayingSpeed50)
vidSpeed75.addEventListener("click", vidPlayingSpeed75)
vidSpeedNormal.addEventListener("click", vidPlayingSpeedNor)
vidSpeed125.addEventListener("click", vidPlayingSpeed125)
vidSpeed150.addEventListener("click", vidPlayingSpeed150)
vidSpeed175.addEventListener("click", vidPlayingSpeed175)
vidSpeed200.addEventListener("click", vidPlayingSpeed200)
vidSpeed400.addEventListener("click", vidPlayingSpeed400)

function vidPlayingSpeed25() {
    video.playbackRate = vidSpeed25.value
}

function vidPlayingSpeed50() {
    video.playbackRate = vidSpeed50.value
}

function vidPlayingSpeed75() {
    video.playbackRate = vidSpeed75.value
}

function vidPlayingSpeedNor() {
    video.playbackRate = vidSpeedNormal.value
}

function vidPlayingSpeed125() {
    video.playbackRate = vidSpeed125.value
}

function vidPlayingSpeed150() {
    video.playbackRate = vidSpeed150.value
}

function vidPlayingSpeed175() {
    video.playbackRate = vidSpeed175.value
}

function vidPlayingSpeed200() {
    video.playbackRate = vidSpeed200.value
}

function vidPlayingSpeed400() {
    video.playbackRate = vidSpeed400.value
}