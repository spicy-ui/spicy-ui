import { createShouldForwardProp, props } from '@styled-system/should-forward-prop';
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import styled, { css } from 'styled-components';
import { useKeyPress } from '../hooks';
import { Overlay } from '../Overlay';
import { baseStyle, size as sizeUtil, withColorMode } from '../util';
import { ModalIn, ModalOut } from './keyframes';

export type ModalSize =
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | 'full';

interface ModalWrapperProps {
  size?: ModalSize;
}

const ModalWrapper = styled('div').withConfig<ModalWrapperProps>({
  shouldForwardProp: createShouldForwardProp([...props, 'size']),
})`
  ${(p) =>
    css({
      ...withColorMode(baseStyle('components.Modal'))(p),
      ...withColorMode(sizeUtil('components.Modal'))(p),
    })}

  &[data-modal-state='entering'],
  &[data-modal-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${ModalIn};
    animation-duration: ${(p) => p.theme.transitions.duration['300']};
  }

  &[data-modal-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${ModalOut};
    animation-duration: ${(p) => p.theme.transitions.duration['200']};
  }

  &[data-modal-state='entered'] {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export interface ModalProps {
  /** Whether the modal is open or not. */
  isOpen: boolean;
  /** Set max size of the modal */
  size?: ModalSize;
  /** Set to `true` to disable closing the modal by clicking the overlay. */
  disableOverlayClick?: boolean;
  /** Set to `true` to disable closing the modal by pushing the escape key. */
  disableListeners?: boolean;
  /** Set to `true` to disable the modals focus trap behaviour. */
  disableFocusTrap?: boolean;
  /** Callback method run when the Close button is clicked. */
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  size = 'md',
  isOpen,
  disableOverlayClick,
  disableListeners,
  disableFocusTrap,
  onClose,
}) => {
  useKeyPress('Escape', () => {
    if (isOpen && !disableListeners && onClose) {
      onClose();
    }
  });

  const handleOverlayClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Prevent clicking to exit inside the dialog
      if (e.target !== e.currentTarget) {
        return;
      }

      if (!disableOverlayClick && onClose) {
        onClose();
      }
    },
    [disableOverlayClick, onClose],
  );

  React.useEffect(() => {
    if (isOpen && !document.body.classList.contains('noscroll')) {
      document.body.classList.add('noscroll');
    }

    return () => document.body.classList.remove('noscroll');
  }, [isOpen]);

  return (
    <Overlay isOpen={isOpen} onClick={handleOverlayClick} top={0} right={0} bottom={0} left={0}>
      {(state) => (
        <FocusLock disabled={disableFocusTrap || !isOpen}>
          <ModalWrapper size={size} role="dialog" aria-modal="true" data-modal-state={state}>
            {children}
          </ModalWrapper>
        </FocusLock>
      )}
    </Overlay>
  );
};

Modal.displayName = 'Modal';

export { Modal };
