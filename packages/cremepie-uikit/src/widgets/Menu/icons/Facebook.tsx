import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <g filter="url(#filter0_bd)">
        <path d="M0 15C0 15 0 15 0 15C7.75629e-07 6.71573 6.71573 7.75629e-07 15 0C15 0 15 0 15 0C15 0 15 0 15 0C23.2843 7.75629e-07 30 6.71573 30 15C30 15 30 15 30 15V15C30 23.2843 23.2843 30 15 30H15C15 30 15 30 15 30C6.71573 30 7.75629e-07 23.2843 0 15C0 15 0 15 0 15Z" fill="#F5F5FA" />
      </g>
      <path d="M20.7751 16.6809L21.5261 13.311H16.8304V11.1242C16.8304 10.2022 17.4863 9.30357 19.5894 9.30357H21.7242V6.43445C21.7242 6.43445 19.7869 6.20679 17.9347 6.20679C14.0677 6.20679 11.54 7.82082 11.54 10.7427V13.311H7.24139V16.6809H11.54V24.8275H16.8304V16.6809H20.7751Z" fill="#6EA3AA" />
      <defs>
        <filter id="filter0_bd" x="-19.5311" y="-19.5311" width="69.0623" height="69.0623" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="9.76557" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0883651 0 0 0 0 0.0720128 0 0 0 0 0.169563 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="effect1_backgroundBlur" result="effect2_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
        </filter>
      </defs>
    </Svg>
  );
};

export default Icon;
