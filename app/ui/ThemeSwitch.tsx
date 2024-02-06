"use client";
import React, { useEffect, useState } from "react";
import { Switch, SwitchProps, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";

export default function ThemeSwitch(props:SwitchProps) {
  const { theme, setTheme } = useTheme();
  

  function changTheme(theme?: string) {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  }
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
    
  } = useSwitch(props);
  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.thumb({
          class: [
            "w-8 h-8",
            "flex items-center justify-center",
            "rounded-lg text-black",
          ],
        })}
        onClick={() => changTheme(theme)}
      >
        {isSelected ? <MoonIcon /> :<SunIcon />}
      </div>
    </Component>
  );
}
