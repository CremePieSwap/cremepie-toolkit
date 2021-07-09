import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5556 11.5556H5.33337V5.33337L7.81591 7.81591L8.75869 6.87314C9.10582 6.526 9.66863 6.526 10.0158 6.87314C10.3629 7.22027 10.3629 7.78308 10.0158 8.13022L9.07299 9.07299L11.5556 11.5556ZM18.9048 12.2065H12.6826L15.1652 14.6891L14.2224 15.6319C13.8753 15.979 13.8753 16.5418 14.2224 16.8889C14.5696 17.2361 15.1324 17.2361 15.4795 16.8889L16.4223 15.9462L18.9048 18.4287V12.2065Z" fill="#6EA3AA"/>
    </Svg>
  );
};

export default Icon;
