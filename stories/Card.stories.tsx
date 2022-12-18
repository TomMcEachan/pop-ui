import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps, ColorOptions, CardVariants } from '../src/Card';
import { IconOptions, IconSize } from '../src/Icon';

const meta: Meta = {
  title: 'Card',
  component: Card,
  args: {
    text: 'Hello',
    variant: 'primary',
    icon: IconOptions.AR,
  },
};

export default meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Card Component',
  variant: CardVariants.Primary,
  icon: IconOptions.AR,
  color: ColorOptions.Blue,
};

export const Primary = Template.bind({});

Primary.args = {
  text: 'Primary Card',
  variant: CardVariants.Primary,
  icon: IconOptions.AR,
  color: ColorOptions.Blue,
};

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'Secondary Card',
  variant: CardVariants.Secondary,
  icon: IconOptions.AR,
  color: ColorOptions.Purple,
  iconSize: IconSize.small,
};
