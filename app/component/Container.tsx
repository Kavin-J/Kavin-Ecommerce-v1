import clsx from "clsx";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
}

function Container({ children, className, maxWidth, ...rest }: Props) {
  return (
    <div
      className={clsx(
        `mx-auto h-full w-full max-w-screen-2xl ${className}`,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
