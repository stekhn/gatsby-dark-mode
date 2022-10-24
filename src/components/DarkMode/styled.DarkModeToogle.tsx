import styled from 'styled-components';

export const SwitchContainer = styled.div`
  width: 54px;
  height: 26px;
  padding: 0;
  border-radius: 30px;
  transition: all 0.2s ease;
`;

export const SwitchCircle = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  box-sizing: border-box;
  transition: all 0.25s ease;
`;

export const SwitchIcon = styled.div`
  position: absolute;
  top: 4px;
  line-height: 0;
  opacity: 0;
  transition: opacity 0.25s ease;

  svg {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    height: 18px;
    width: 18px;
  }
`;

export const SwitchIconLeft = styled(SwitchIcon)`
  left: 7px;
`;

export const SwitchIconRight = styled(SwitchIcon)`
  right: 7px;
`;

export const SwitchWrapper = styled.div<{
  isEnabled?: boolean;
}>`
  display: inline-block;
  position: relative;
  vertical-align: sub;
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-right: 0.25rem;
  cursor: pointer;
  touch-action: pan-x;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;

  ${SwitchContainer} {
    background-color: ${({ isEnabled }) => (isEnabled ? '#FED' : '#123')};
  }

  ${SwitchCircle} {
    background-color: ${({ isEnabled }) => (isEnabled ? '#321' : '#DEF')};
    left: ${({ isEnabled }) => (isEnabled ? '30px' : '2px')};
  }

  ${SwitchIconLeft} {
    opacity: ${({ isEnabled }) => (isEnabled ? '1' : '0')};
  }

  ${SwitchIconRight} {
    opacity: ${({ isEnabled }) => (isEnabled ? '0' : '1')};
  }
`;
