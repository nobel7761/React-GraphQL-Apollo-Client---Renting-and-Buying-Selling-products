import { ReactElement } from "react";
import { IconType } from "react-icons";

const Icon = ({
  name,
  className = "text-disabled",
  size = "text-xl",
  onClick,
}) => {
  const Name = name;
  return <Name className={`${size} ${className}`} onClick={onClick} />;
};

export default Icon;
