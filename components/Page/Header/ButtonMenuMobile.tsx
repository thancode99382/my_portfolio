import classNames from "classnames";
import { ButtonHTMLAttributes, FC } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export const ButtonMenuMobile: FC<IButton> = ({ active ,...rest }) => {
  
  console.log(active)
  return (


    <button
    {...rest}
      data-collapse-toggle="navbar-default"
      type="button"
      className={
        "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-500 rounded-lg md:hidden  hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      }
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className={"sr-only"}>Open main menu</span>
      <svg
        className={classNames("w-6 h-6", {
          hidden: active,
        })}
        
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
      <svg
        className={classNames("w-6 h-6", {
          hidden: !active,
        })}
       
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
};
