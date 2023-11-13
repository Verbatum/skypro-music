import styled from 'styled-components';

export const PlayerBtnShuffleImg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: var(--play-list-title);
  path {
    fill: var(--player-btn-repeat-shuffle);
  }
  &:hover path {
    fill: var(--player-btn-repeat-shuffle-hover);
  }
  &:active path {
    fill: var(--main-text);
  }
`;
