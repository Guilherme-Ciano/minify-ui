import styled, { css, keyframes } from 'styled-components';

interface ToastWrapperProps {
  type: 'info' | 'success' | 'warning' | 'error' | 'black' | 'default';
  $isVisible: boolean;
}

interface ToastContainerProps {
  position:
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight'
    | 'topLeft'
    | 'topCenter'
    | 'topRight';
}

export const ToastContainer = styled.div<ToastContainerProps>`
  position: fixed;
  bottom: calc((${({ theme }) => theme.Size.sm}) + 0.25rem);
  transform: translateX(-50%);
  z-index: 1000;

  height: fit-content;

  ${({ position }) => positions[position]};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ToastWrapper = styled.div<ToastWrapperProps>`
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  gap: ${({ theme }) => theme.Size.sxsm};

  min-width: ${({ theme }) => theme.Size.sxl};
  max-width: calc(((${({ theme }) => theme.Size.sxl})) * 4);

  align-items: center;

  background-color: ${({ type }) => types[type]};

  & p {
    color: ${({ theme, type }) =>
      type !== 'default' ? theme.Colors.BW['100'] : theme.Colors.BW['900']};
    font-weight: ${({ theme }) => theme.Font.Weight.normal};
  }

  border: 1px solid ${({ theme }) => theme.Colors.BW['200']};
  box-shadow: -4px 6px 5px 2px rgba(0, 0, 0, 0.02);
  -webkit-box-shadow: -4px 6px 5px 2px rgba(0, 0, 0, 0.02);
  -moz-box-shadow: -4px 6px 5px 2px rgba(0, 0, 0, 0.02);

  padding: ${({ theme }) => theme.Size.xsm};
  border-radius: ${({ theme }) => theme.Size.sxsm};
  margin-bottom: ${({ theme }) => theme.Size.sxsm};

  animation: ${fadeIn} 0.5s ease-in-out, ${fadeOut} 0.5s ease-in-out 3s forwards;

  & svg {
    font-size: ${({ theme }) => theme.Font.Sizes.Heading3};
    fill: ${({ theme }) => theme.Colors.BW['100']};
  }
`;

const types = {
  success: css`
    ${({ theme }) => theme.Colors.Events.Success['500']}
  `,
  error: css`
    ${({ theme }) => theme.Colors.Events.Danger['500']}
  `,
  warning: css`
    ${({ theme }) => theme.Colors.Events.Warning['500']}
  `,
  info: css`
    ${({ theme }) => theme.Colors.Primary['400']}
  `,
  black: css`
    ${({ theme }) => theme.Colors.BW['700']}
  `,
  default: css`
    ${({ theme }) => theme.Colors.BW['100']}
  `,
};

const positions = {
  topCenter: css`
    left: 50%;
    top: 10%;
  `,

  bottomCenter: css`
    left: 50%;
  `,

  topLeft: css`
    left: 0%;
    top: 10%;
  `,

  bottomLeft: css`
    left: 0%;
  `,

  topRight: css`
    right: 0%;
    top: 10%;
  `,

  bottomRight: css`
    right: 0%;
  `,
};
