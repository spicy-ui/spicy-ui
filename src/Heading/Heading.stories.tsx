import { select, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Heading, Stack } from '..';

const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export default {
  title: 'Heading',
  component: Heading,
  decorators: [withKnobs],
};

export const Simple = () => <Heading variant={select('variant', variants, 'h2')}>Heading</Heading>;

export const AllVariants = () => (
  <Stack spacing="4">
    {variants.map((variant, idx) => (
      <Heading key={uid(variant, idx)} as={variant as any} variant={variant}>
        {variant}: Heading
      </Heading>
    ))}
  </Stack>
);
