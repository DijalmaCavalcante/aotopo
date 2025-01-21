import { html } from '@bake-js/-o-id/dom';
import amazon from './assets/amazon.png'
import apple from './assets/apple.png'
import deezer from './assets/deezer.png'
import instagramOriginal from './assets/instagramOriginal.png'
import spotify from './assets/spotify.png'
import tiktokOriginal from './assets/tiktokOriginal.png'
import youtube from './assets/youtube.png'
import youtubeOriginal from './assets/youtubeOriginal.png'

const svg = {
	mouse: () =>
		`
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="currentColor"><path d="M480-120q-99.85 0-169.92-70.08Q240-260.15 240-360v-236.92q0-99.85 70.08-169.93 70.07-70.07 169.92-70.07t169.92 70.07Q720-696.77 720-596.92V-360q0 99.85-70.08 169.92Q579.85-120 480-120Zm20-476.92h180q0-78.93-52.42-135.46Q575.15-788.92 500-796v199.08Zm-220 0h180V-796q-75.15 7.08-127.58 63.62Q280-675.85 280-596.92ZM480-160q83 0 141.5-58.5T680-360v-196.92H280V-360q0 83 58.5 141.5T480-160Zm0-396.92Zm20-40Zm-40 0Zm20 40Z"/></svg>
    `,

	pause: () =>
		`
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="currentColor"><path d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z"/></svg>
    `,
	play: () =>
		`
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="currentColor"><path d="M320-273v-414q0-17 12-28.5t28-11.5q5 0 10.5 1.5T381-721l326 207q9 6 13.5 15t4.5 19q0 10-4.5 19T707-446L381-239q-5 3-10.5 4.5T360-233q-16 0-28-11.5T320-273Z"/></svg>
    `,
	forward: () =>
		`
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="currentColor"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800h6l-34-34q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T509-891l103 103q12 12 12 28t-12 28L509-629q-12 12-28.5 11.5T452-630q-11-12-11.5-28t11.5-28l34-34h-6q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM360-500h-30q-13 0-21.5-8.5T300-530q0-13 8.5-21.5T330-560h60q13 0 21.5 8.5T420-530v180q0 13-8.5 21.5T390-320q-13 0-21.5-8.5T360-350v-150Zm140 180q-17 0-28.5-11.5T460-360v-160q0-17 11.5-28.5T500-560h80q17 0 28.5 11.5T620-520v160q0 17-11.5 28.5T580-320h-80Zm20-60h40v-120h-40v120Z"/></svg>
    `,
	back: () =>
		`
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="currentColor"><path d="M360-500h-30q-13 0-21.5-8.5T300-530q0-13 8.5-21.5T330-560h60q13 0 21.5 8.5T420-530v180q0 13-8.5 21.5T390-320q-13 0-21.5-8.5T360-350v-150Zm140 180q-17 0-28.5-11.5T460-360v-160q0-17 11.5-28.5T500-560h80q17 0 28.5 11.5T620-520v160q0 17-11.5 28.5T580-320h-80Zm20-60h40v-120h-40v120ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-17 11.5-28.5T160-480q17 0 28.5 11.5T200-440q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l34 34q12 12 11.5 28T508-630q-12 12-28.5 12.5T451-629L348-732q-12-12-12-28t12-28l103-103q12-12 28.5-11.5T508-890q11 12 11.5 28T508-834l-34 34h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/></svg>
    `,
	arrowright: () =>
		`
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="currentColor"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
    `,
	arrowleft: () =>
		`
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="currentColor"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
    `,
	strokeinstagram: () =>
		`
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32.000000 32.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="currentColor"><path d="M50 308 c-41 -22 -51 -54 -48 -160 3 -86 6 -100 26 -120 21 -21 31 -23 132 -23 101 0 111 2 132 23 20 20 23 34 26 126 4 98 2 104 -21 132 -24 28 -29 29 -124 32 -66 2 -106 -2 -123 -10z m220 -38 c17 -17 20 -33 20 -110 0 -77 -3 -93 -20 -110 -17 -17 -33 -20 -110 -20 -77 0 -93 3 -110 20 -17 17 -20 33 -20 110 0 77 3 93 20 110 17 17 33 20 110 20 77 0 93 -3 110 -20z"/><path d="M230 245 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0 -15 -7 -15 -15z"/><path d="M105 215 c-50 -49 -15 -135 55 -135 70 0 105 86 55 135 -15 16 -36 25 -55 25 -19 0 -40 -9 -55 -25z m93 -17 c15 -15 15 -61 0 -76 -15 -15 -61 -15 -76 0 -15 15 -15 61 0 76 7 7 24 12 38 12 14 0 31 -5 38 -12z"/></g></svg>
    `,
	strokespotify: () =>
		`
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32.000000 32.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="currentcolor" stroke="currentcolor"><path d="M92 304 c-107 -55 -121 -198 -26 -271 96 -73 238 -10 251 111 14 119 -120 214 -225 160z m159 -53 c35 -35 39 -44 39 -91 0 -47 -4 -56 -39 -91 -35 -35 -44 -39 -91 -39 -47 0 -56 4 -91 39 -57 57 -57 125 0 182 35 35 44 39 91 39 47 0 56 -4 91 -39z"/><path d="M88 223 c-39 -10 -14 -21 55 -25 39 -3 78 -7 86 -9 7 -2 15 1 18 8 7 19 -110 39 -159 26z"/><path d="M90 171 c-8 -5 -12 -12 -10 -14 10 -9 160 -16 160 -8 0 20 -125 39 -150 22z"/><path d="M85 119 c-10 -15 -7 -16 68 -22 74 -5 95 5 45 22 -40 14 -105 14 -113 0z"/></g></svg>
    `,
  deezer: () =>
    html`
      <img src="${deezer}" style="width: 24px"/>
    `,
  youtube: () =>
    html`
      <img src="${youtube}" style="width: 24px"/>
    `,
  apple: () =>
    html`
      <img src="${apple}" style="width: 24px"/>
    `,
  amazon: () =>
    html`
      <img src="${amazon}" style="width: 24px"/>
    `,
  spotify: () =>
    html`
      <img src="${spotify}" style="width: 24px"/>
    `,
  instagramoriginal: () =>
    html`
      <img src="${instagramOriginal}" style="width: 24px"/>
    `,

  tiktokoriginal: () =>
    html`
      <img src="${tiktokOriginal}" style="width: 24px"/>
    `,

  youtubeoriginal: () =>
    html`
      <img src="${youtubeOriginal}" style="width: 24px"/>
    `,
};

export default svg
