const modelViewer = document.querySelector('model-viewer');

// Loading bar kodu
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

modelViewer.addEventListener('progress', onProgress);

// AR modundayken döndürmeyi engelle
modelViewer.addEventListener('ar-status', (event) => {
  const status = event.detail.status;
  
  if (status === 'session-started') {
    // AR başladıysa: rotasyonu sıfırla ve dondur
    modelViewer.cameraOrbit = '0deg 75deg auto';
    modelViewer.disableCameraControls = true;
  } else if (status === 'session-ended') {
    // AR bittiğinde kontrolleri geri aç
    modelViewer.disableCameraControls = false;
  }
});
