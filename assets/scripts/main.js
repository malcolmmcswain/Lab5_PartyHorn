let volumeLevels = ['./assets/media/icons/volume-level-0.svg', './assets/media/icons/volume-level-1.svg', './assets/media/icons/volume-level-2.svg', './assets/media/icons/volume-level-3.svg'];
let audioIcons = ['./assets/media/images/air-horn.svg', './assets/media/images/car.svg', './assets/media/images/party-horn.svg'];
let audioFiles = ['./assets/media/audio/air-horn.mp3', './assets/media/audio/car-horn.mp3', './assets/media/audio/party-horn.mp3'];

let volumeImage = document.getElementById('volume-image');
let volumeNumber = document.getElementById('volume-number');
let volumeSlider = document.getElementById('volume-slider');

let radioAirHorn = document.getElementById('radio-air-horn');
let radioCarHorn = document.getElementById('radio-car-horn');
let radioPartyHorn = document.getElementById('radio-party-horn');

let audioIcon = document.getElementById('sound-image');
let audioButton = document.getElementById('honk-btn');
let audio = document.getElementById('horn-sound');

const changeVolumeLevel = (level) => {
    if (level >= 67) {
        volumeImage.src = volumeLevels[3];
        audioButton.disabled = false;
    } else if (level >= 34) {
        volumeImage.src = volumeLevels[2];
        audioButton.disabled = false;
    } else if (level >= 1) {
        volumeImage.src = volumeLevels[1];
        audioButton.disabled = false;
    } else {
        volumeImage.src = volumeLevels[0];
        audioButton.disabled = true;
    }
}

volumeNumber.onchange = () => {
    volumeSlider.value = volumeNumber.value;
    changeVolumeLevel(volumeNumber.value);
    audio.volume = (volumeNumber.value / 100);
}

volumeSlider.onchange = () => {
    volumeNumber.value = volumeSlider.value;
    changeVolumeLevel(volumeSlider.value);
    audio.volume = (volumeSlider.value / 100);
}

radioAirHorn.onclick = () => {
    audio.src = audioFiles[0];
    audioIcon.src = audioIcons[0];
}

radioCarHorn.onclick = () => {
    audio.src = audioFiles[1];
    audioIcon.src = audioIcons[1];
}

radioPartyHorn.onclick = () => {
    audio.src = audioFiles[2];
    audioIcon.src = audioIcons[2];
}

audioButton.addEventListener('click', (e) => {
    e.preventDefault();
    audio.play();
});