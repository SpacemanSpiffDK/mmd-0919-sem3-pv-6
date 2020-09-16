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

const video = videojs('video1');

const elmsButtons = document.querySelectorAll('#controls button'); // find all buttons in #controls
elmsButtons.forEach((button) => {               // loop through the buttons
    button.addEventListener('click', () => {    // setup a click eventlistener
        const mp4 = button.dataset.urlMp4;      // grab mp4  url from the button
        // console.log(mp4);                        // test that data has been grabbed from "data-url-mp4" attribute
        // const webm = button.dataset.urlWebm;    // grab webm url from the button
        // console.log(webm);                        // test that data has been grabbed from "data-url-webm" attribute
        const newSrc = mp4;                     // I've chosen mp4 as the new src, since this apparently works well in video.js
        // const currentTime = video.currentTime();   // ----------- You can store the current time of the video you are stopping

        // if (video.src() != newSrc){          //  
            video.pause();      // stop the player
            video.src(newSrc);     // change source => both webm or mp4 works in video.js for some reason, I haven't tested Safari!!!
            video.load();       // load new source
            // video.currentTime(currentTime);          // ----------- You can continue from where the previous video was if you have stored the current time 
            video.play();       // start the player

            // remove "active" class from all buttons, 
            // add "active" class to the button that has been pressed

            elmsButtons.forEach((btn) => {       // loop through buttons
                btn.classList.remove('active');  // remove "active" class
            });
            button.classList.add('active');      // add "active" class to the clicked button
        // }
    });
});

// video.on('ended', () => {
//     alert('too slow!');
// });

