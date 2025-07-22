// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

const modelViewer = document.querySelector('model-viewer');
modelViewer.addEventListener('progress', onProgress);

// Kamera rotasyonunu sabitle ve döndürmeyi engelle
function lockRotation() {
  // Sabit kamera açısını belirle (örnek: 0 derece azimut, 75 derece yükseklik, 105% uzaklık)
  modelViewer.cameraOrbit = '0deg 75deg 105%'; 
  requestAnimationFrame(lockRotation);
}

lockRotation();
