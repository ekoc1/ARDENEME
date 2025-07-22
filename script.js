window.addEventListener('DOMContentLoaded', () => {
  const modelViewer = document.getElementById('viewer');

  if (!modelViewer) {
    console.error('model-viewer öğesi bulunamadı!');
    return;
  }

  // AR başlarsa: kamera kontrolünü devre dışı bırak
  modelViewer.addEventListener('sessionstart', () => {
    modelViewer.disableCameraControls = true;
    console.log("AR başladı: kontrol kapalı");
  });

  // AR biterse: tekrar aç
  modelViewer.addEventListener('sessionend', () => {
    modelViewer.disableCameraControls = false;
    console.log("AR bitti: kontrol açık");
  });

  // Yükleme çubuğu
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
