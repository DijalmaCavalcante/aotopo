import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .membersmobile {
      align-items: center;
      display: flex;
      height: 100vh;
      justify-content: center;
      overflow: hidden;
      position: relative;
      width: 100%;
      flex-direction: column;
    }

    .membersmobile__background {
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
      margin-top: var(--spacing-lg);
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

    .membersmobile__container {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      max-width: 90%;
      padding: var(--spacing_inset-xs);
      position: relative;
      z-index: 1;
    }

    .membersmobile__actions {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: space-between;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 2;
    }

    .membersmobile__action {
      color: var(--color-pure-white);
      width: 42px;
      height: 42px;
      position: relative;
      border-radius: 50%;
      cursor: pointer;

      &::before {
        content: "";
        display: block;
        position: absolute;
        display: block;
        width: 42px;
        height: 42px;
      }
    }

    .membersmobile__persons {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-md);
      height: 100%;
      justify-content: end;
      width: 100%;
      padding: 10px;
    }

    .membersmobile__risk {
      background-color: var(--color-pure-black);
      border-radius: 9px;
      border: 2px solid var(--color-orange);
      display: flex;
      padding: var(--spacing_inset-nano) var(--spacing_inset-xs);
      width: 50%;
      z-index: 1;
      position: absolute;
    }

    .membersmobile__character {
      width: 330px;
      height: 530px;
    }

    @media( width >= 420px) {
      .membersmobile__character {
        width: 330px;
        height: 530px;
      }
    }

    @media( width >= 470px) {
      .membersmobile__character {
        width: 400px;
        height: 600px;
      }
    }
`
}

export default style
