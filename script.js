window.addEventListener('DOMContentLoaded', () => {
  const modelViewer = document.getElementById('viewer');

  // AR başlatıldığında döndürmeyi kapat
  modelViewer.addEventListener('ar-status', (event) => {
    const status = event.detail.status;
    if (status === 'session-started') {
      modelViewer.disableCameraControls = true;
      console.log("AR başladı → döndürme kapalı");
    } else if (status === 'session-ended') {
      modelViewer.disableCameraControls = false;
      console.log("AR bitti → döndürme açık");
    }
  });

  // İsteğe bağlı: progress bar işlevi
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
});
