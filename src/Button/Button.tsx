import React, { HTMLAttributes } from 'react';
import { Icon, IconOptions, IconSize, IconColorOptions } from '../Icon/Icon';

/**  ButtonProps contains the definitions for the Button component  */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** This defines the text that will be in the button */ text: string;
  /** This defines the the buttons variant which is used to get its css rules */ variant: ButtonVariant;
  /** This defines an optional icon which can be passed into the button */ icon: IconOptions;
}

/** This enum defines the different variable options available to the button */
export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  PrimaryOutline = 'primary-outline',
  SecondaryOutline = 'secondary-outline',
}

export enum ButtonColors {
  Blue = 'blue',
  Magenta = 'magenta',
}

export const Button = ({ text, variant, icon, ...props }: ButtonProps) => {
  let style = getButtonStyle(variant);
  let buttonIcon = getButtonIcon(icon);

  return (
    <button className={style} {...props}>
      <div className="flex justify-between m-1 items-center">
        <Icon
          size={IconSize.extraSmall}
          icon={buttonIcon}
          overrideColor={IconColorOptions.SPBlueLight}
        />
        {text}
      </div>
    </button>
  );
};

/** This function returns the button style based on the variant selected in the prop */
function getButtonStyle(variant: ButtonVariant) {
  let style;

  if (variant === ButtonVariant.Primary) {
    style = `bg-spblue-light text-lg rounded-lg border-4 border-solid border-spblue-light text-white p-2 font-bold hover:border-4 hover:border-solid hover:border-sp-blue-light hover:bg-white hover:text-spblue-light focus:outline-none focus:ring focus:ring-sporange focus:ring-4 focus:ring-offset-2`;
  }
  if (variant === ButtonVariant.Secondary) {
    style = `bg-sppurple-light text-lg rounded-lg border-4 border-solid border-sppurple-light text-white p-2 font-bold hover:border-4 hover:border-solid hover:border-sppurple-light hover:bg-white hover:text-sppurple-light focus:outline-none focus:ring focus:ring-sporange focus:ring-4 focus:ring-offset-2`;
  }
  if (variant === ButtonVariant.PrimaryOutline) {
    style =
      'border-4 border-solid rounded-lg  border-spblue-light font-bold text-lg p-2 text-spblue-light hover:bg-spblue-light hover:text-white focus:outline-none focus:ring focus:ring-sporange focus:ring-4 focus:ring-offset-2';
  }
  if (variant === ButtonVariant.SecondaryOutline) {
    style =
      'border-4 border-solid rounded-lg  border-sppurple-light font-bold text-lg p-2 text-sppurple-light hover:bg-sppurple-light hover:text-white focus:outline-none focus:ring focus:ring-sporange focus:ring-4 focus:ring-offset-2  ';
  }

  return style;
}

/** This @function gets the specified icon from the icon component */
function getButtonIcon(icon: IconOptions) {
  let returnIcon = icon;
  return returnIcon;
}
