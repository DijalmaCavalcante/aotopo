import { paint, didPaint } from '@bake-js/-o-id/dom';
import component from './component'
import { define } from '@bake-js/-o-id';
import style from './style';
import Echo from '@bake-js/-o-id/echo'
import { onProgress, onMusicduration } from './interfaces'

@define('at-player')
@paint(component, style)
class Player extends Echo(HTMLElement) {
  #audio

  get audio () {
    return (this.#audio ??= this.shadowRoot.querySelector('audio'))
  }

  constructor () {
    super();
    this.attachShadow({ mode: "open" });
  }

  play () {
    this.audio.play()
    const event = new CustomEvent('play')
    this.dispatchEvent(event)
    return this
  }

  pause () {
    this.audio.pause()
    const event = new CustomEvent('pause')
    this.dispatchEvent(event)
    return this
  }

  @didPaint
  [onProgress] () {
    let lastTime = 0; // Armazena o tempo da última atualização

    this.audio.addEventListener('timeupdate', () => {
      const { currentTime, duration } = this.audio;
      const currentTimeInSeconds = Math.floor(currentTime); // Arredonda para segundos inteiros
      const init = { detail: ((currentTimeInSeconds / duration) * 100).toFixed(2) };

      if (currentTimeInSeconds !== lastTime) {
        lastTime = currentTimeInSeconds;
  
        const event = new CustomEvent('progress', init);
        this.dispatchEvent(event);
      }
    })

    return this
  }

  @didPaint
  [onMusicduration] () {
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60).toString().padStart(2, '0');
      return `${minutes}:${seconds}`;
    }

    this.audio.addEventListener('timeupdate', () => {
      const { currentTime, duration } = this.audio;
      const init = { detail: {currentTime: formatTime(currentTime), duration: formatTime(duration)} }
      const event = new CustomEvent('time', init);
      this.dispatchEvent(event);
    })

    return this
  }
  
}

export default Player;

