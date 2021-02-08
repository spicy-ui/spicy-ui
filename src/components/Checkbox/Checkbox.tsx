import * as React from 'react';
import { useComponentStyles } from '../../system';
import { LiteralUnion } from '../../types';
import { Box } from '../Box';
import { Text } from '../Text';

type CheckboxSizes = 'xs' | 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'width' | 'height' | 'size'> {
  /** Checkbox label. */
  label?: string;
  /** If `true`, the checkbox will be disabled. */
  isDisabled?: boolean;
  /** If `true`, the checkbox will be marked as invalid. */
  isInvalid?: boolean;
  /** Color of the checkbox. Supports any key in `theme.colors`. */
  color?: string;
  /** Size of the checkbox. */
  size?: LiteralUnion<CheckboxSizes>;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { id, name, value, label, checked, isDisabled, isInvalid, color, size, ...rest } = props;

  const outerStyles = useComponentStyles('CheckboxOuter', props);
  const inputStyles = useComponentStyles('CheckboxInput', props);
  const labelStyles = useComponentStyles('CheckboxLabel', props);

  return (
    <Box as="label" htmlFor={id} sx={outerStyles}>
      <Box
        as="input"
        type="checkbox"
        ref={ref}
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
        data-checked={!checked ? undefined : checked}
        disabled={isDisabled}
        {...rest}
        sx={inputStyles}
      />
      {label && (
        <Text as="div" fontSize="inherit" lineHeight="inherit" sx={labelStyles}>
          {label}
        </Text>
      )}
    </Box>
  );
});

Checkbox.defaultProps = {
  color: 'blue',
  size: 'md',
};

Checkbox.displayName = 'Checkbox';
