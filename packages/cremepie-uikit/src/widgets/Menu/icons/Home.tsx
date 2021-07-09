import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M20 19.7279V9.99647C20 9.64028 19.84 9.29682 19.56 9.05512L12.8933 3.33074C12.64 3.10177 12.32 3 12 3C11.68 3 11.36 3.11449 11.1067 3.33074L4.44 9.05512C4.16 9.2841 4 9.62756 4 9.99647V19.7279C4 20.4276 4.6 21 5.33333 21H8C8.73333 21 9.33333 20.4276 9.33333 19.7279V14.6396H14.6667V19.7279C14.6667 20.4276 15.2667 21 16 21H18.6667C19.4 21 20 20.4276 20 19.7279Z" fill="#6EA3AA"/>
    </Svg>
  );
};

export default Icon;
