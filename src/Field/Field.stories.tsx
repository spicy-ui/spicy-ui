import { boolean, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';
import { uid } from 'react-uid';
import { Field, Input, Stack } from '..';
import { Select } from '../Select';
import { TextArea } from '../TextArea';

export default {
  title: 'Field',
  component: Field,
  decorators: [withKnobs],
};

export const Simple = () => (
  <Field
    id="email"
    label="Email"
    helperText="This will be the email you use to log into your account"
    errorText="That username is already in use"
    isDisabled={boolean('isDisabled', false)}
    isInvalid={boolean('isInvalid', false)}
    isReadOnly={boolean('isReadOnly', false)}
    isRequired={boolean('isRequired', false)}
  >
    <Input placeholder="example@gmail.com" type="email" />
  </Field>
);

export const InputFields = () => (
  <Stack spacing="base">
    <Field id="disabled" label="Disabled" isDisabled>
      <Input value="Disabled field" />
    </Field>
    <Field id="readonly" label="Readonly" isReadOnly>
      <Input value="Readonly field" />
    </Field>
    <Field id="required" label="Required" isRequired>
      <Input value="Required field" />
    </Field>
    <Field id="invalid" label="Invalid" isInvalid>
      <Input value="Invalid field" />
    </Field>
  </Stack>
);

const options = ['apples', 'bananas', 'oranges', 'pears'].map((value, idx) => (
  <option key={uid(value, idx)} value={value}>
    {value}
  </option>
));

export const SelectFields = () => (
  <Stack spacing="base">
    <Field id="disabled" label="Disabled" isDisabled>
      <Select>{options}</Select>
    </Field>
    <Field id="readonly" label="Readonly" isReadOnly>
      <Select>{options}</Select>
    </Field>
    <Field id="required" label="Required" isRequired>
      <Select>{options}</Select>
    </Field>
    <Field id="invalid" label="Invalid" isInvalid>
      <Select>{options}</Select>
    </Field>
  </Stack>
);

export const TextAreaFields = () => (
  <Stack spacing="base">
    <Field id="disabled" label="Disabled" isDisabled>
      <TextArea />
    </Field>
    <Field id="readonly" label="Readonly" isReadOnly>
      <TextArea />
    </Field>
    <Field id="required" label="Required" isRequired>
      <TextArea />
    </Field>
    <Field id="invalid" label="Invalid" isInvalid>
      <TextArea />
    </Field>
  </Stack>
);
