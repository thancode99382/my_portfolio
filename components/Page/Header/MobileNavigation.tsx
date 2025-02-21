import classNames from "classnames";
import { FC } from "react";
import { menu } from "./Navigation";
import Link from "next/link";

export const MobileNavigation: FC<{ active: boolean }> = ({active}) => {

  return (
    <div
      className={classNames(
        "w-full md:hidden transition-all bg-background2 translate-t-full",
        {
          "opacity-100 h-[calc(100vh_-_72px)]": active,
          "opacity-0 h-0": !active,
        }
      )}
    >
      <ul className="container flex flex-col items-center justify-center h-full gap-8 py-4 text-center lg:gap-12 pb-14">
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>
              <div
                className={
                  "cursor-pointer block py-3 px-4 text-2xl text-light hover:underline hover:text-indigo-300 transition "
                }
              >
                {item.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
