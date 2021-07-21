import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <g filter="url(#filter0_bd)">
        <path d="M0 15C0 15 0 15 0 15C7.75629e-07 6.71573 6.71573 7.75629e-07 15 0C15 0 15 0 15 0C15 0 15 0 15 0C23.2843 7.75629e-07 30 6.71573 30 15C30 15 30 15 30 15V15C30 23.2843 23.2843 30 15 30H15C15 30 15 30 15 30C6.71573 30 7.75629e-07 23.2843 0 15C0 15 0 15 0 15Z" fill="#F5F5FA" />
      </g>
      <path d="M21.0497 8.97039C21.5032 9.4313 21.6389 10.0726 21.6903 10.5385C21.7476 11.0585 21.7279 11.655 21.6629 12.2693C21.5321 13.5044 21.1996 14.9768 20.7545 16.3939C20.31 17.8093 19.7347 19.2282 19.0932 20.3425C18.7735 20.8977 18.4156 21.4156 18.0213 21.8241C17.6446 22.2145 17.1249 22.6194 16.4701 22.7298L16.4665 22.7304C16.3433 22.7508 16.2232 22.7554 16.1808 22.757L16.1727 22.7573C15.7451 22.7746 15.3759 22.6239 15.1239 22.4885C14.8544 22.3437 14.6015 22.1526 14.376 21.9523C13.924 21.5507 13.4834 21.0236 13.1249 20.4739C12.9285 20.1727 12.7424 19.8428 12.5903 19.5013C12.3646 18.9948 12.5024 18.4192 12.8437 17.9817L14.9143 15.5419C15.0203 15.417 15.0126 15.2319 14.8966 15.1162C14.7805 15.0005 14.5949 14.9928 14.4696 15.0985L12.0225 17.163C11.5561 17.5247 10.9392 17.6649 10.4057 17.4115C10.0646 17.2495 9.73573 17.0542 9.4353 16.8476C8.86799 16.4574 8.32443 15.9734 7.92581 15.4689C7.72693 15.2171 7.53904 14.9288 7.41106 14.6168C7.2874 14.3154 7.18061 13.8954 7.28146 13.436L7.28162 13.4352C7.41943 12.8079 7.83242 12.3112 8.22384 11.9494C8.63603 11.5684 9.1543 11.2186 9.71076 10.9034C10.8273 10.2709 12.2412 9.69739 13.6511 9.2518C15.0618 8.80598 16.5258 8.47014 17.7536 8.33788C18.364 8.27214 18.9589 8.25183 19.4785 8.31065C19.9451 8.36347 20.5905 8.50371 21.0497 8.97039Z" fill="#6EA3AA" />
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
