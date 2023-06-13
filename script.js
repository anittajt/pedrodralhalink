var videoMostrado = false;
var player;

function mostrarVideo() {
  var videoContainer = document.querySelector('.video-container');

  if (!videoMostrado) {
    // Exibir o vídeo do YouTube
    videoContainer.style.display = 'block';
    videoMostrado = true;

    // Carregar o player do YouTube
    player = new YT.Player('player', {
      width: '100',
      height: '100',
      videoId: 'V-QdZuPkj9o',
      playerVars: {
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        loop: 1,
        playlist: 'V-QdZuPkj9o',
        modestbranding: 1,
        fs: 0,
        mute: 1,
        playsinline=1
      },
      events: {
        onReady: function(event) {
          event.target.playVideo(); // Reproduzir o vídeo automaticamente
        }
      }
    });
  }
}

// Aguardar a API do YouTube ser carregada
function onYouTubePlayerAPIReady() {
  mostrarVideo();
}
