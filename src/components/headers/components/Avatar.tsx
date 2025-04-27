import { User } from "@/types/api";
import React from "react";

type Props = {
  data?: User;
  size?: string;
} & React.CSSProperties;

const Avatar = (props: Props) => {
  const { data, size = "2rem", ...styles } = props;

  const name = React.useMemo(() => {
    if (!data?.firstName || !data?.lastName) return "MF";
    return `${data?.firstName[0] + data?.lastName[0]}`.toLocaleUpperCase();
  }, [data?.firstName, data?.lastName]);

  return (
    <div
      style={{ width: size, height: size, ...styles }}
      className="avatar-circle"
    >
      {name}
    </div>
  );
};

export default Avatar;
