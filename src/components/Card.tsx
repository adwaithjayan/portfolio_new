import grain from "@/assets/images/grain.jpg";
import { log } from "console";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
export default function Card({className,children,...other}
  :ComponentPropsWithoutRef<"div">) {
    
  return (
    <div className={twMerge("md:pt-12 md:px-10 bg-gray-800 rounded-3xl after:absolute relative after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6",className)}{...other}>
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${grain.src})` }}
      ></div>
      {children}
    </div>
  );
}
