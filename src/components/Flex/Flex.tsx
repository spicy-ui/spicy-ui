import { extendedFlexbox, ExtendedFlexboxProps, shouldForwardProp } from '@spicy-ui/styled-system';
import styled from 'styled-components';
import { allSystem, sxMixin } from '../../system';
import { BoxProps } from '../Box';

export interface FlexProps extends BoxProps, ExtendedFlexboxProps {}

export const Flex = styled.div.withConfig<FlexProps>({ shouldForwardProp })(sxMixin, allSystem, extendedFlexbox);

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';
