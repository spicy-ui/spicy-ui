import * as React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '../Box';
import { baseStyle, withColorMode } from '../util';

const StyledLink = styled(Box)`
  ${withColorMode(baseStyle('components.Link'))}
`;

export interface LinkProps extends BoxProps {
  href?: string;
  isDisabled?: boolean;
  isExternal?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Link: React.FC<LinkProps> = ({ children, isExternal, isDisabled, onClick, ...props }) => {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        onClick(e);
      }
    },
    [isDisabled, onClick],
  );

  return (
    <StyledLink
      as="a"
      aria-disabled={isDisabled || undefined}
      tabIndex={isDisabled ? -1 : undefined}
      target={isExternal ? '_blank' : undefined}
      role={isExternal ? `noopener noreferrer` : undefined}
      onClick={handleClick}
      {...props}
    >
      {children}
    </StyledLink>
  );
};

Link.displayName = 'Link';

export { Link };
