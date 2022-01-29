import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { ArrowLink } from '@components';
import {
  SquigglyArrow, TileBg,
} from '@icons';
import { queries } from '@utils/rwd';

export const Section = styled.section`
  position: relative;
  z-index: 2;
  margin-top: -5%;

  @media ${queries.xs} {
    margin-top: unset;

    > div {
      > h2 {
        margin-top: 1.5em;
        padding: 0 2em;
        font-size: clamp(46px, 5.208333vw, 100px);
        line-height: 1
      }
    }
  }
`;

export const TilesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.getMin(12)};
  margin: ${({ theme }) => theme.getMin(66)} 0;

  @media ${queries.xs} {
    position: relative;
    left: -5vw;
    overflow-x: scroll;
    display: flex;
    gap: 5vw;
    width: 100vw;
    max-width: 100vw;
    margin: ${({ theme }) => `${theme.getMin(16)}`} 0;
    padding: 4vw 5vw;
    scroll-snap-type: x mandatory;
  }
`;

export const SingleTile = styled.li`
  position: relative;
  z-index: ${({ isFlipped }) => (isFlipped ? 2 : 1)};
  box-shadow: ${({ isFlipped }) => (isFlipped ? `${rgba('#000', 0.25)} -24px 27px 42px` : `${rgba('#000', 0.1)} 0 3px 36px`)};
  aspect-ratio: 1/1;
  border-radius: ${({ theme }) => theme.getRadius('small')};
  transition: ${({ theme }) => theme.getTransitions([
    'transform',
    'box-shadow',
  ])};
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg) scale(1.2)' : 'rotateY(0) scale(1)')};
  transform-style: preserve-3d;

  @media ${queries.xs} {
    flex-shrink: 0;
    width: 95vw;
    margin: 5vw;
    scroll-snap-align: center;
    transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg) scale(1)' : 'rotateY(0) scale(1)')};
  }
`;

const tileCommonStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  backface-visibility: hidden;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  text-align: center;
`;

export const TileFront = styled.div`
  ${tileCommonStyle};
  padding: 0 ${({ theme }) => theme.getMin(64)};
  background-color: #fff;
  color: ${({ theme }) => theme.getColor('alt')};
  font-weight: bold;
  font-size: clamp(14px, 1.458333vw, 28px);
  font-family: ${({ theme }) => theme.getFont('alt')};

  @media ${queries.s} {
    padding: 0 15%;
    font-size: clamp(12px, 1.25vw, 24px);
  }

  @media ${queries.xs} {
    padding: 0 ${({ theme }) => theme.getMax(32)};
    font-size: clamp(32px, 3.333333vw, 64px);
  }
`;

export const TileBack = styled.div`
  ${tileCommonStyle};
  background-image: ${({ theme }) => theme.getGradient('radial')};
  color: #fff;
  font-size: clamp(10px, 0.833333vw, 16px);
  font-family: ${({ theme }) => theme.getFont('')};
  transform: rotateY(180deg);

  > p {
    width: 55%;
  }

  @media ${queries.s} {
    font-size: min(1vw, 8px);
  }

  @media ${queries.xs} {
    font-size: clamp(18px, 1.666667vw, 32px);
  }
`;

export const FlipButton = styled(ArrowLink)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  font-size: clamp(10px, 0.729167vw, 14px);
  text-transform: uppercase;
  transform: translateX(-50%);

  &.& {
    position: absolute;
  }

  @media ${queries.xs} {
    bottom: 5%;
    padding: ${({ theme }) => `${theme.getMax(12)} ${theme.getMax(24)}`};
    font-size: clamp(14px, 1.25vw, 24px);

    > svg {
      margin-left: 2em;
    }
  }
`;

export const CloseButton = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  color: #fff;
  font-weight: 300;
  font-size: clamp(6px, 0.520833vw, 10px);
  text-transform: uppercase;
  transition: ${({ theme }) => theme.getTransitions(['filter'])};
  transform: translate3d(0, 0, 0);
  cursor: pointer;

  :hover {
    filter: drop-shadow(0 0 2px ${rgba('#fff', 0.5)});
  }

  > svg {
    width: ${({ theme }) => theme.getMin(38)};
    margin-bottom: ${({ theme }) => theme.getMin(12)};
    fill: currentColor;
  }

  @media ${queries.s} {
    font-size: min(8px, 1vw);

    > svg {
      width: min(16px, 2vw);
    }
  }

  @media ${queries.xs} {
    font-size: clamp(10px, 0.729167vw, 14px);

    > svg {
      width: ${({ theme }) => theme.getMin(48)};
    }
  }
`;

export const Footnotes = styled.footer`
  position: relative;
  z-index: 1;
  padding-right: 40%;
  font-size: clamp(8px, 0.625vw, 12px);
  font-family: ${({ theme }) => theme.getFont('alt')};

  > ol {
    list-style-position: inside;

    > li {
      display: inline;

      > span {
        color: ${({ theme }) => theme.getColor('alt')};
      }
    }
  }

  @media ${queries.xs} {
    display: none;
  }
`;

export const TileBackground = styled(TileBg)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  max-width: 90%;
  height: auto;
  max-height: 90%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const ArrowTextWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.getMin(-125)};
  right: 12%;
  width: ${({ theme }) => theme.getMin(556)};

  @media ${queries.huge} {
    top: ${({ theme }) => theme.getMin(-95)};
  }

  @media ${queries.l} {
    width: 40%;
  }

  @media ${queries.s} {
    top: ${({ theme }) => theme.getMin(-85)};
  }
`;

export const ArrowText = styled.p`
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.getMin(50)};
  width: auto;
  color: ${({ theme }) => theme.getColor('alt')};
  font-size: clamp(14px, 1.666667vw, 32px);
  font-family: ${({ theme }) => theme.getFont('heading')};
  text-align: right;

  @media ${queries.l} {
    top: 2em;
  }

  @media ${queries.s} {
    top: 3em;
  }

  @media ${queries.xs} {
    position: static;
    bottom: 0;
    order: 3;
    margin-top: -2em;
    font-size: clamp(24px, 2.5vw, 48px);
  }
`;

export const Arrow = styled(SquigglyArrow)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  pointer-events: none;
`;

