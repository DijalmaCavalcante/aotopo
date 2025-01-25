import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .membersdesktop {
      align-items: center;
      display: flex;
      height: 100vh;
      justify-content: center;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .membersdesktop_background {
      background-repeat: no-repeat;
      filter: brightness(0.3);
      height: 100%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }

    .membersdesktop__title {
      position: relative;
      height: 100%;
      padding-top: var(--spacing_inset-sm);
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: center;
      margin-top: var(--spacing-xxxl);
    }

    .membersdesktop__line {
      width: 200px;
      height: 15px;
      background-color: var(--color-orange);
      position: absolute;
      margin-top: 10px;
    }

    .membersdesktop__members {
      position: absolute;
      color: white;
      font-size: var(--font-size-md);
      z-index: 1;
      top: 0; 
    }

    .membersdesktop_container {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      max-width: 1280px;
      position: absolute;
      text-align: center;
      top: 0;
      width: 100%;
      z-index: 1;
      padding: var(--spacing_inset-xs);
    }

    .members_desktop {
      color: white;
      font-size: var(--font-size-md);
      margin-top: 10px;
    }

    .membersdesktop_group {
      align-items: end;
      display: none;
      gap: var(--spacing_inset-xs);
      height: 100%;
      justify-content: space-around;
      width: 100%;
    }

    .teste {
      align-items: end;
      display: none;
      gap: var(--spacing_inset-xs);
      height: 100%;
      justify-content: space-around;
      width: 100%;
    }

    .banner__icons {
      align-self: center;
      background-color: transparent;
      justify-self: center;
      display: flex;
      border-radius: 50%;
      transition: transform 0.3s ease;
      color: white;
      cursor: pointer;
      width: 36px;
      height: 36px;
    }

    .banner__icons:hover {
      transform: scale(1.1);
      background-color: var(--color-orange);
    }

    .membersdesktop_group[current = "true"] {
      display: flex;
    }

    .membersdesktop_description {
      border: 3px solid orange;
      max-width: 25%;
      align-self: center;
      padding: var(--spacing_inset-xs);
      border-radius: var(--radius-medium);
      background: rgba(255, 255, 255, 0.2); /* Fundo semitransparente */
      backdrop-filter: blur(3px);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing_inset-xs);
    }

    .membersdesktop__logo {
      width: 84px;
    }

    .membersmobile__character {
      width: auto;
      height: 800px;
    }

    .membersdesktop_nav {
      display: flex;
      z-index: 2;
      align-self: end;
      position: absolute;
      padding-bottom: var(--spacing_inset-sm);
      justify-content: space-evenly;
      width: 90%;
      gap: var(--spacing_inset-md);
    }

    .membersdesktop__button {
      background-color: var(--color-master);
      border-radius: 9px;
      border: 2px solid var(--color-master-light);
      color: var(--color-pure-white);
      cursor: pointer;
      display: flex;
      font-size: var(--font-size-xs);
      justify-content: center;
      padding: var(--spacing_inset-nano);
      position: relative;
      width: 100%;
      align-items: center;
      opacity: 0.8;
      height: 60px;

      &::before {
        content: "";
        display: block;
        position: absolute;
        display: block;
        height: 100%;
        width: 100%;
      }
    }

    .membersdesktop__button[current = "true"] {
      border: 2px solid var(--color-orange);
      background-color: var(--color-pure-black);
      opacity: 1;
    }

    .membersdesktop__person {
      width: 80%;
      height: 100%;
    }

`
}

export default style
