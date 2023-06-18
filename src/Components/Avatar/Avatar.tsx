import { FC } from "react";
import batmanAvatar from "../../Assets/avatar-batman.png";

import "./Avatar.scss";
import { IAvatarProps } from "./interface";

const Avatar: FC<IAvatarProps> = ({ id }) => {
  return <img className="avatar__img" src={batmanAvatar} />;
};

export default Avatar;
