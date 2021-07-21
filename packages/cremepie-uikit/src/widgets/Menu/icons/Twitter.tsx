import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <g filter="url(#filter0_bd)">
        <path d="M0 15C0 15 0 15 0 15C7.75629e-07 6.71573 6.71573 7.75629e-07 15 0C15 0 15 0 15 0C15 0 15 0 15 0C23.2843 7.75629e-07 30 6.71573 30 15C30 15 30 15 30 15V15C30 23.2843 23.2843 30 15 30H15C15 30 15 30 15 30C6.71573 30 7.75629e-07 23.2843 0 15C0 15 0 15 0 15Z" fill="#F5F5FA" />
      </g>
      <path d="M22.9136 12.4009C22.9254 12.5819 22.9254 12.763 22.9254 12.944C22.9254 18.4655 19.0855 24.8276 12.0672 24.8276C9.90506 24.8276 7.89649 24.1422 6.20691 22.9526C6.51412 22.9914 6.80947 23.0043 7.12849 23.0043C8.91256 23.0043 10.5549 22.3449 11.8664 21.2199C10.1886 21.1811 8.78261 19.9785 8.29818 18.3233C8.5345 18.3621 8.77079 18.3879 9.01894 18.3879C9.36156 18.3879 9.70423 18.3362 10.0232 18.2457C8.27458 17.8577 6.96305 16.1767 6.96305 14.1466V14.0949C7.47108 14.4052 8.06189 14.5992 8.68805 14.625C7.66013 13.875 6.98669 12.5948 6.98669 11.1465C6.98669 10.3707 7.1757 9.65948 7.50654 9.03879C9.38517 11.5733 12.209 13.2284 15.3755 13.4095C15.3164 13.0991 15.2809 12.7759 15.2809 12.4526C15.2809 10.1509 16.9823 8.27588 19.0972 8.27588C20.196 8.27588 21.1885 8.78019 21.8856 9.59484C22.7481 9.41382 23.5752 9.06466 24.3077 8.58623C24.0241 9.55608 23.4216 10.3707 22.63 10.8879C23.398 10.7975 24.1423 10.5647 24.8276 10.2414C24.3078 11.069 23.6579 11.806 22.9136 12.4009Z" fill="#6EA3AA" />
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
