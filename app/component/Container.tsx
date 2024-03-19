import clsx from 'clsx';
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement>{
    children?:React.ReactNode;
    maxWidth?:'sm'|'md'|'lg'
}

function Container({children,className,maxWidth,...rest}: Props) {
    
  return (
    <div className={clsx(`w-full ${maxWidth}:container mx-auto`,className)}>{children}</div>
  )
}

export default Container