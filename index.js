const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");

let isplaying = false; //pause var

//artist and title 
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");


//arry t add songs
const songs = [{
        name: "abccc",
        title: "katcha badam",
        artist: "unknow",
    },
    {
        name: "male",
        title: "male",
        artist: "unknow",
    },
    {
        name: "Neeralli_Sanna_Ani",
        title: "neerali",
        artist: "unknow",
    },

];

//play
const playmusic = () => {
    isplaying = true;
    music.play();

    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("animate");
};

//pause
const pausemusic = () => {

    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("animate");
};
play.addEventListener("click", () => {
    if (isplaying) {
        pausemusic();
    } else {
        playmusic();
    }
});

//load next songs and title name 
const loadsong = (songs) => {

    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";

    img.src = "images/" + songs.name + ".jpg";
    title.textContent = songs.title;
}

//first index=0;
songindex = 1;
//click next button
const nextsong = () => {
    songindex = (songindex + 1) % songs.length;
    loadsong(songs[songindex]);
    playmusic
};

const prevsong = () => {
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadsong(songs[songindex]);
    playmusic
}
next.addEventListener("click", nextsong);
prev.addEventListener('click', prevsong);