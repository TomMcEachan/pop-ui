import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonProps, Button, ButtonVariant } from '../src/Button/Button';
import { IconOptions } from '../src/Icon/Icon';

const meta: Meta = {
  title: 'Button',
  component: Button,
  args: {
    text: 'Button',
    variant: 'primary',
    icon: IconOptions.AR,
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Default Button',
  variant: ButtonVariant.Primary,
};

export const Primary = Template.bind({});

Primary.args = {
  text: 'Primary Button',
  variant: ButtonVariant.Primary,
};

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'Secondary Button',
  variant: ButtonVariant.Secondary,
};

export const PrimaryOutline = Template.bind({});

PrimaryOutline.args = {
  text: 'Primary Outline Button',
  variant: ButtonVariant.PrimaryOutline,
};

export const SecondaryOutline = Template.bind({});

SecondaryOutline.args = {
  text: 'Secondary Outline Button',
  variant: ButtonVariant.SecondaryOutline,
};
