import React from "react";
interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
function RowLayout({children,className,...rest}: RowProps) {
  return <div {...rest} className="flex flex-row flex-wrap w-full ">{children}</div>;
}

export default RowLayout;
