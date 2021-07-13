import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <rect x="4" y="4" width="4.923" height="4.92309" rx="1.27397" fill="#6EA3AA" />
      <rect x="4" y="11.3845" width="4.923" height="4.92309" rx="1.27397" fill="#6EA3AA" />
      <rect x="11.3848" y="4" width="4.923" height="4.92309" rx="1.27397" fill="#6EA3AA" />
      <rect x="11.3848" y="11.3845" width="8.61525" height="8.6154" rx="1.27397" fill="#6EA3AA" />
    </Svg>
  );
};

export default Icon;
