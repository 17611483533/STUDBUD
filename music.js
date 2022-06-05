const music = document.getElementById('music');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const audio = document.getElementById('audio');
const songName = document.getElementById('songName');
const songArtist = document.getElementById('songArtist');
const cover = document.getElementById('cover');
const currentime = document.getElementById('currenttime');
const duration = document.getElementById('duration');
//Three songs
const songs = [ 'Easy On Me', 'I Drink Wine', 'Strangers By Nature'];
const artists = [ 'Adele'];
const audios =['Easy On Me.mp3', 'I Drink Wine.mp3', 'Strangers By Nature.mp3'];
const durations = [ '3:36', '5:51', '2:54'];
//Set up the index
let songIndex = 2;
let artistIndex = 2;
let audioIndex = 2;
let durationIndex = 2;

startSong(songs[songIndex]);

function startSong(song){
  songName.innerText = song;
  songArtist.innerText = artists;
  duration.innerText = durations[durationIndex];
  audio.src = '${song}.mp3';
  audio.volume = 0.9;

}

//The user clicks the plat button to play music.
play.addEventListener("click", () =>{
    const letPlay = music.classList.contains("play");
    if (letPlay){
        pauseSong();
    }else{
        playSong();

        }

});
//Button changes when the user clicks
//Button "play" => "pause"
function playSong(){
    music.classList.add("play");
    play.querySelector("i.fa-solid").classList.remove("fa-play");
    play.querySelector("i.fa-solid").classList.add("fa-pause");

    audio.play();
}

function pauseSong(){
    music.classList.remove("play");
    play.querySelector("i.fa-solid").classList.add("fa-play");
    play.querySelector("i.fa-solid").classList.remove("fa-pause");

    audio.pause();
}

function prevSong(){
    songIndex--;
    if(songIndex<0){
        songIndex = songs.length - 1; 
    }
         startSong(songs[songIndex]);
         playSong();
        
    

}

function nextSong(){
    songIndex++;
    if(songIndex > songs.length - 1){
        songIndex = 0; 
    }
         startSong(songs[songIndex]);
         playSong();   
    }

prev.addEventListener("click",prevSong);
next.addEventListener("click",nextSong); 

