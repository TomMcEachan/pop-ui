import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonProps, Button} from '../src/Button';
import { IconOptions } from '../src/Icon';

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
  variant: "primary"
};

export const Primary = Template.bind({});

Primary.args = {
  text: 'Primary Button',
  variant: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'Secondary Button',
  variant: "secondary"
};

export const PrimaryOutline = Template.bind({});

PrimaryOutline.args = {
  text: 'Primary Outline Button',
  variant: "primary-outline"
};

export const SecondaryOutline = Template.bind({});

SecondaryOutline.args = {
  text: 'Secondary Outline Button',
  variant: "secondary-outline"
};
