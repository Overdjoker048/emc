const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const audioPlayer = document.getElementById('audioPlayer');

openPopupBtn.addEventListener('click', () => {
    popup.classList.add('active');
    overlay.classList.add('active');
});

closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

overlay.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});