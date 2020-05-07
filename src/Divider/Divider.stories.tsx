import * as React from 'react';
import { Box, Divider } from '..';

export default {
  title: 'Divider',
  component: Divider,
};

export const Horizontal = () => <Divider />;

export const Vertical = () => (
  <Box display="inline-flex">
    <div>one</div>
    <Divider orientation="vertical" />
    <div>two</div>
  </Box>
);
