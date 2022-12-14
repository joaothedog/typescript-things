interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playBtn: HTMLButtonElement;
  stopBtn: HTMLButtonElement;
  fscreenBtn: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle: () => void;
  stop: () => void;
  fullscreenAction: () => void;
  initEvents: () => void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playBtn: HTMLButtonElement;
  private stopBtn: HTMLButtonElement;
  private fscreenBtn: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playBtn = videoPlayerElements.playBtn;
    this.stopBtn = videoPlayerElements.stopBtn;
    this.fscreenBtn = videoPlayerElements.fscreenBtn;
  }
  fullscreenAction(): void {
    //
  }
  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playBtn.innerHTML = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playBtn.innerHTML = 'Play';
    }
  }
  stop(): void {}
  initEvents(): void {
    this.playBtn.addEventListener('click', () => {
      this.playToggle();
    });

    this.stopBtn.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playBtn.innerHTML = 'Play';
    });
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playBtn: document.querySelector('.play') as HTMLButtonElement,
  stopBtn: document.querySelector('.stop') as HTMLButtonElement,
  fscreenBtn: document.querySelector('.fullscreen') as HTMLButtonElement,
});

videoPlayer.initEvents();
