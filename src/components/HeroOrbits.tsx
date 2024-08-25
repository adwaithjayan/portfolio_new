import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function HeroOrbits({
  children,
  size,
  rotaion,
  spinDuration,
  isSpin,
  shouldSpin,
  spin,
}: PropsWithChildren<{shouldSpin?:boolean,spin?:string,size: number; rotaion: number ,spinDuration?:string,isSpin?:boolean}>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className={twMerge(isSpin === true && "animate-spin")} style={{animationDuration:spinDuration}}>
      <div
       className="flex items-start justify-start "
        style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotaion}deg)`,
        }}
      >
        <div className={twMerge(shouldSpin === true && 'animate-spin')} style={{animationDuration:spin}}>

        <div
          className="inline-flex "
          style={{ transform: `rotate(${rotaion * -1}deg)` }}
          >
          {children}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
