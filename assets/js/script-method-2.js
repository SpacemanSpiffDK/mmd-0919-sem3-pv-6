// JS by Dan Høegh
// UCN MMD 2020

let options = {
    "controls": false, 
    "autoplay": false, 
    "preload": "auto", 
    "muted": true,
    "loop": false
};

videojs('video1', options);
videojs('video2', options);
videojs('video3', options);

const elmsButtons = document.querySelectorAll('#controls button'); // find all buttons in #controls
elmsButtons.forEach((button) => {                   // loop through the buttons
    button.addEventListener('click', () => {        // setup a click eventlistener
        const target = button.dataset.target;       // get target string value from button
        // set hidden class and pause on all videos        
        const elmsVideos = document.querySelectorAll('.video-js'); // find all video.js videos on the page
        elmsVideos.forEach((video) => {             // loop through the videos
            video.classList.add('hidden');          // set "hidden" class
            video.querySelector('video').pause();   // pause the video
        });
        videojs(target).play();                     // play the video that matches the target string
        document.querySelector('#' + target).classList.remove('hidden'); // remove "hidden" class from the div parent of the target video
        elmsButtons.forEach((btn) => {              // loop through buttons
            btn.classList.remove('active');         // remove "active" class
        });
        button.classList.add('active');             // add "active" class to the clicked button
    });
});
