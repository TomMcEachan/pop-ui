import React from 'react';
import { Icon, IconOptions, IconSize, IconColorOptions } from '../Icon/Icon';

/**
 * @type CardProps defines the required data for the Card Component
 */
export type CardProps = {
  /** The main text that shows on the component */
  text: string;
  /** Defines the CSS of the card */
  variant: CardVariants;
  /** Defines which color the component will be */
  color: ColorOptions;
  /** The icon that will show on the component  */
  icon: IconOptions;
  /** The size of the icon that will be displayed on the card  */
  iconSize: IconSize;
  /** This is what runs when you click the card. A method should be passed to this */
  handleClick: ClickOptions;
  /** This is where the route can be specified if required*/
  route?: string;
};

/** This enum defines the potential variants of the card */
export const enum CardVariants {
  Primary = 'primary',
  Secondary = 'secondary',
}

//(event: React.MouseEvent<HTMLButtonElement>) => void;

export enum ClickOptions {
  Route = 'route',
  Increment = 'increment',
}

/** This enum defines the colors available to the card */
export const enum ColorOptions {
  Purple = 'purple',
  Magenta = 'magenta',
  Blue = 'blue',
}

/** The card component is the primary component used to navigate around the app and comes in several variants, colors and configurations.
 *  It takes several props which can be passed to it dynamically or explicitly.
 */
export const Card = ({ text, variant, icon, color, iconSize }: CardProps) => {
  let divStyle = getOuterDivStyle(variant, color);
  let titleStyle = getTitleStyle(variant);
  let titleDiv = getForegroundStyle(color, variant);

  return (
    <button className={divStyle} aria-label={`${text} button`}>
      <div className="flex flex-col items-center">
        <Icon
          icon={icon}
          size={iconSize}
          overrideColor={IconColorOptions.None}
        />
        <div className={titleDiv}>
          <h2 className={titleStyle}>{text}</h2>
        </div>
      </div>
    </button>
  );
};

/** This method gets the style of the outer div of the card based on the specified variant prop and color prop  */
export function getOuterDivStyle(variant: CardVariants, color: ColorOptions) {
  let divStyle;
  let colorStyle = getBackgroundColor(color);

  if (variant === CardVariants.Primary) {
    divStyle = `min-w-48 min-h-48 p-4 border border-transparent rounded-lg shadow-md ${colorStyle} m-1 focus:outline-none focus:ring focus:ring-sporange focus:ring-4 focus:ring-offset-2`;
  }

  if (variant === CardVariants.Secondary) {
    divStyle = `min-w-24 min-h-24 border border-transparent rounded-lg shadow-md ${colorStyle} m-1 focus:outline-none focus:ring focus:ring-sporange focus:ring-4 focus:ring-offset-2`;
  }

  return divStyle;
}

/** This method gets the style of the title based on the variant specified in the card props */
export function getTitleStyle(variant: CardVariants) {
  let titleStyle;

  if (variant === CardVariants.Primary) {
    titleStyle =
      'flex items-center justify-center font-bold text-white text-xs STablet:text-base MDLaptop:text-xl';
  }
  if (variant === CardVariants.Secondary) {
    titleStyle =
      'flex items-center justify-center font-bold text-white text-xs lg:text-base MDLaptop:text-xl';
  }

  return titleStyle;
}

/** This method gets the specific color of the card based on the color specified in the props */
export function getBackgroundColor(color: ColorOptions) {
  let colorStyle;
  if (color === ColorOptions.Blue) {
    colorStyle = 'bg-spblue-light';
  }
  if (color === ColorOptions.Magenta) {
    colorStyle = 'bg-spmagenta-light';
  }
  if (color === ColorOptions.Purple) {
    colorStyle = 'bg-sppurple-light';
  }

  return colorStyle;
}

/** This method gets the complementary color for the selected color option */
export function getForegroundColor(color: ColorOptions) {
  let style;
  if (color === ColorOptions.Blue) {
    style = 'bg-spblue-dark';
  }

  if (color === ColorOptions.Magenta) {
    style = 'bg-spmagenta-dark';
  }

  if (color === ColorOptions.Purple) {
    style = 'bg-sppurple-dark';
  }

  return style;
}

/** This method gets the complete foreground style */
export function getForegroundStyle(color: ColorOptions, variant: CardVariants) {
  let style;
  let colorStyle = getForegroundColor(color);
  let size = getForegroundSize(variant);

  style = `${size} text-center p-2 px-4  m-2  ${colorStyle} rounded-lg`;

  return style;
}

/** This method gets the foreground size which is appropriate for the card variant */
export function getForegroundSize(variant: CardVariants) {
  let size;

  switch (variant) {
    case CardVariants.Primary:
      size = 'min-h-23 min-w-36';
      break;
    case CardVariants.Secondary:
      size = 'min-h-14 min-w-24';
      break;
  }

  return size;
}
