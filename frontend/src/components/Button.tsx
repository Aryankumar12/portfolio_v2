import {  type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick ? : () => void;
  className?: string;
  href ?: string;
  target? : string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
}


const Button = (props: ButtonProps) => {
    if(props.href){
       return(
        <a href={props.href} target={props.target} className={ ` hover:bg-zinc-800
transition-all bg-black text-white rounded-2xl px-5 py-2.5 cursor-pointer ${props.className || '' } flex items-center gap-2
 `}>
            {props.children}
        </a>
       )
    }
   
  return (
    <button disabled = {props.disabled} className= {`bg-black text-white rounded-2xl px-5 py-2.5 cursor-pointer ${props.className || '' } flex items-center gap-2
 `} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button