import React from "react";

type Props = {
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
};
const CardLayout: React.FC<Props> = ({ leftChildren, rightChildren }) => {
  return (
    <div className="tw-flex tw-flex-col shopping-cart tw-mt-16  tw-gap-4 lg:tw-flex-row">
      <div className="tw-w-full lg:tw-w-[75%]">{leftChildren}</div>
      <div className="tw-flex-1">{rightChildren}</div>
    </div>
  );
};

export default CardLayout;
