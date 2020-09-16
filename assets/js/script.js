// JS by Dan Høegh
// UCN MMD 2020

let options = {
    "controls": true, 
    "autoplay": false, 
    "preload": "auto", 
    "muted": true,
    "loop": true
};

videojs('video1', options);

const elmsButtons = document.querySelectorAll('#controls button'); // find all buttons in #controls
elmsButtons.forEach((button) => {               // loop through the buttons
    button.addEventListener('click', () => {    // setup a click eventlistener
        const mp4 = button.dataset.urlMp4;      // grab mp4  url from the button
        const webm = button.dataset.urlWebm;    // grab webm url from the button
        let video = videojs('video1');
        // let currentTime = video.currentTime();   // ----------- You can store the current time of the video you are stopping
        video.pause();      // stop the player
        video.src(mp4);     // change source => both webm or mp4 works in video.js for some reason, I haven't tested Safari!!!
        video.load();       // load new source
        // video.currentTime(currentTime);          // ----------- You can continue from where the previous video was if you have stored the current time 
        video.play();       // start the player
    });
});

