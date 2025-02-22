const songs = [
    "Songs/alone-296348.mp3",
    "Songs/atmosphere-of-atlantis-246389.mp3",
    "Songs/tere-sang-with-you-207644.mp3",
    "Songs/tasvir-old-bollywood-pop-music-2009-206522.mp3",
    "Songs/vlog-music-beat-trailer-showreel-promo-background-intro-theme-27429.mp3"
];

let currentSongIndex = 0;
const audio = document.getElementById('audio');
const audioSource = document.getElementById('audioSource');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to load the current song
function loadSong(index) {
    audioSource.src = songs[index];
    audio.load();
    audio.play();
}

// Function to play the previous song
function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
}

// Function to play the next song
function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
}

// Event listeners for buttons
prevBtn.addEventListener('click', playPrevious);
nextBtn.addEventListener('click', playNext);

// Load the first song on page load
loadSong(currentSongIndex);