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
      align-self: center;
      border-radius: var(--radius-medium);
      max-width: 200px;
      width: 100%;
    }

    @media (width >= 768px) {
      .infomusic__name {
        text-align: start !important;
      }
    }

    .infomusic__mediacontrols {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--spacing_inset-sm);
      width: 100%;
    }

    audio {
      width: 100%;
      border-radius: var(--radius-medium);
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
  `
}

export default style
