console.log("welcome to spotify");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar')
let songs = [
    {songName:"Noise to your heart", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"let me love you", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"let me love you", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"let me love you", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"let me love you", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"let me love you", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"let me love you", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"let me love you", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
]

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
 if(audioElement.pause || audioElement.currentTime<=0){
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
 }
 else if(audioElement.play){
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
 }
})
//listen to Events
myprogressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})

