import { css } from '@bake-js/-o-id/dom'

function style () {
  return css`
    .infomusic {
      align-items: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 9px;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .infomusic__container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-xs);
      padding: var(--spacing_inset-lg);
      width: 100%;
    }

    @media(width >= 768px) {
      .infomusic__container {
        flex-direction: row;
      }
    }

    .infomusic__image {
      border-radius: 12px;
      max-width: 200px;
      width: 100%;
      align-self: center;
    }

    .infomusic__trackdetails {
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-md);
      width: 100%;
    }

    .infomusic__names {
      align-items: center;
      color: var(--color-pure-white);
      display: flex;
      flex-direction: column;
    }

    @media(width >= 768px) {
      .infomusic__names {
        align-items: flex-start;
      }
    }

    .infomusic__musicname {
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
    }

    .infomusic__bandname {
      font-size: var(--font-size-nano);
    }

    @media (width >= 768px) {
      .infomusic__bandname {
        margin-bottom: var(--spacing_inset-xs);
      }
    }

    .infomusic__mediacontrols {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
      width: 100%;
    }

    @media(width >= 768px) {
      .infomusic__mediacontrols {
        align-items: start;
        flex-direction: column-reverse;
        gap: var(--spacing_inset-xs);
      }
    }

    .infomusic__player {
      width: 100%;
    }

    .informusic__playeractions {
      align-items: center;
      display: flex;
      gap: var(--spacing_inset-xs);
      justify-content: center;
      width: 100%;
      flex-direction: column;
    }

    @media(width >= 768px) {
      .informusic__playeractions {
        flex-direction: row;
        gap: var(--spacing_inset-xs);
      }
    }

    .infomusic__icons {
      display: flex;
      gap: var(--spacing_inset-xs);

      a {
        cursor: pointer;
      }
    }

    @media(width >= 768px) {
      .infomusic__icons {
        gap: var(--spacing_inset-nano);
      }
    }

    .infomusic__progress {
      display:flex; 
      flex-direction:column; 
      width:100%; 
      gap:var(--spacing_inset-quarck);
    }

    @media(width >= 768px) {
      .infomusic__progress {
        margin-top:22px;
      }
    }
  `
}

export default style
