import {
  TbAugmentedReality,
  TbGlobe,
  TbSchool,
  TbSettings,
} from 'react-icons/tb';
import {
  BsFillBadgeVrFill,
  BsFillBriefcaseFill,
  BsPeopleFill,
} from 'react-icons/bs';
import { BiShoppingBag, BiTimeFive, BiMapAlt } from 'react-icons/bi';
import { FaTicketAlt } from 'react-icons/fa';
import React from 'react';

/* --------------------------------------------------------------------------------------*/

/** This @enum outlines all possible icons available throughout the project. All new icons should be added to this enum */
export enum IconOptions {
  AR = 'AR',
  Website = 'website',
  VR = 'vr',
  Booking = 'booking',
  Shop = 'shop',
  Opening = 'opening',
  Tickets = 'tickets',
  Directions = 'directions',
  Support = 'support',
  Learn = 'learn',
  Settings = 'settings',
}

/** This @enum outlines the possible sizes available to the icon component */
export enum IconSize {
  extraSmall = 'extra-small',
  small = 'small',
  medium = 'medium',
  large = 'large',
  extraLarge = 'extra large',
}

/** This @enum details the colors available to the icon component which can override the predefined variants */
export enum IconColorOptions {
  SPBlueDark = 'SP Blue Dark',
  SPPurpleDark = 'SP Purple Dark',
  SPMagentaDark = 'SP Magenta Dark',
  SPBlueLight = 'SP Blue Light',
  SPPurpleLight = 'SP Purple Light',
  SPMagentaLight = 'SP Magenta Light',
  None = 'No Color',
  Black = 'Black',
}

/** @type IconProps defines the props required to render the Icon Component across  */
export type IconProps = {
  icon: IconOptions;
  size: IconSize;
  overrideColor: IconColorOptions;
};

/** The icon component is an accessible component used across the whole project. Any additional icons required for the project should be added to
 * the @enum IconOptions. It takes several props which can be passed to it dynamically or explicitly depending on need */
export const Icon = ({ icon, size, overrideColor }: IconProps) => {
  let iconOption = getIcon(icon, size, overrideColor);
  return (
    <span role="presentation" aria-label={`${icon} icon`}>
      {iconOption}
    </span>
  );
};

/** This @function gets the selected size of the icon based on the prop that is passed in to the component */
export function getIconSize(size: IconSize) {
  let iconSize;
  switch (size) {
    case IconSize.extraSmall:
      iconSize = 'h-10 w-10';
      break;
    case IconSize.small:
      iconSize = 'h-16 w-16';
      break;
    case IconSize.medium:
      iconSize = 'h-20 w-20';
      break;
    case IconSize.large:
      iconSize = 'h-40 w-40';
      break;
    case IconSize.extraLarge:
      iconSize = 'h-60 w-60';
      break;
    default:
      iconSize = 'h-20 w-20';
      break;
  }

  return iconSize;
}

/** This @function gets and styles the specified icon based on all of the props passed to the component */
export function getIcon(
  options: IconOptions,
  size: IconSize,
  overrideColor: IconColorOptions
) {
  let icon;
  let iconSize = getIconSize(size);
  let fill;
  let stroke;

  if (overrideColor === IconColorOptions.None) {
    stroke = `stroke-spwhite stroke-4 ${iconSize} flex-no-shrink m-1`;
    fill = `fill-spwhite stroke-4 ${iconSize} flex-no-shrink m-1`;
  } else {
    let color = getOverrideColor(overrideColor);
    stroke = `stroke-${color} stroke-5 ${iconSize} flex-no-shrink m-1`;
    fill = `fill-${color} stroke-4 ${iconSize} flex-no-shrink m-1`;
  }

  switch (options) {
    case IconOptions.AR:
      icon = <TbAugmentedReality className={stroke} />;
      break;
    case IconOptions.Website:
      icon = <TbGlobe className={stroke} />;
      break;
    case IconOptions.VR:
      icon = <BsFillBadgeVrFill className={fill} />;
      break;
    case IconOptions.Booking:
      icon = <BsFillBriefcaseFill className={fill} />;
      break;
    case IconOptions.Shop:
      icon = <BiShoppingBag className={fill} />;
      break;
    case IconOptions.Opening:
      icon = <BiTimeFive className={fill} />;
      break;
    case IconOptions.Tickets:
      icon = <FaTicketAlt className={fill} />;
      break;
    case IconOptions.Directions:
      icon = <BiMapAlt className={fill} />;
      break;
    case IconOptions.Support:
      icon = <BsPeopleFill className={fill} />;
      break;
    case IconOptions.Learn:
      icon = <TbSchool className={stroke} />;
      break;
    case IconOptions.Settings:
      icon = <TbSettings className={stroke} />;
      break;
  }

  return icon;
}

/** This @function assigns an override color to the component if required */
function getOverrideColor(overrideColor: IconColorOptions) {
  let color;

  switch (overrideColor) {
    case IconColorOptions.Black:
      color = `black`;
      break;
    case IconColorOptions.SPBlueDark:
      color = `spblue-dark`;
      break;
    case IconColorOptions.SPBlueLight:
      color = `spblue-light`;
      break;
    case IconColorOptions.SPPurpleDark:
      color = `sppurple-dark`;
      break;
    default:
      color = ``;
      break;
  }

  return color;
}
