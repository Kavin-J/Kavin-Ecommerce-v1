import { slider } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const SliderWrappers = (props: PropsWithChildren<Props>) => {
  const repeatedChildren = Array.from({ length: 4 }, () =>
    React.Children.toArray(props.children).flat(),
  );

  return (
    <div
      {...props}
      className={"animate-slider flex h-full w-fit " + props.className}
    >
      {React.Children.map(repeatedChildren, (child, index) => (
        <div key={index} className="flex w-56 items-center justify-center ">
          {child}
        </div>
      ))}
    </div>
  );
};

export default SliderWrappers;
