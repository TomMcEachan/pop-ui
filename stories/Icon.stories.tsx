import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Icon,
  IconProps,
  IconOptions,
  IconSize,
  IconColorOptions,
} from '../src/Icon';

const meta: Meta = {
  title: 'Icon',
  component: Icon,
  args: {
    icon: IconOptions.AR,
    size: IconSize.medium,
    overrideColor: IconColorOptions.Black,
  },
};

export default meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {};
