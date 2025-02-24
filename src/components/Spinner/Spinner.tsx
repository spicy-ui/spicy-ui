import * as React from 'react';
import { SxProp, useComponentStyles } from '../../system';
import { AsProp, HTMLAttributes, LiteralUnion } from '../../types';
import { Box } from '../Box';

export type SpinnerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface SpinnerProps extends HTMLAttributes, AsProp, SxProp {
  /** Color of the spinner. */
  color?: string;
  /** Color of the spinner's track. */
  trackColor?: string;
  /** Thickness of the spinner. */
  thickness?: string;
  /** Spinner animation speed. */
  speed?: string;
  /** Spinner size. */
  size?: LiteralUnion<SpinnerSizes>;
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const { sx, color, trackColor, thickness, speed, size, ...rest } = props;

  const styles = useComponentStyles('Spinner', props);

  return <Box ref={ref} sx={styles} {...rest} />;
});

Spinner.defaultProps = {
  color: 'blue.500',
  trackColor: 'transparent',
  thickness: '2px',
  speed: '0.45s',
  size: 'md',
};

Spinner.displayName = 'Spinner';
