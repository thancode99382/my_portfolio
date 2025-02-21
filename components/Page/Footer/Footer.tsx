import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className={"bg-[#181d24]"}>
      <div className="container relative text-center">
        <div className="flex flex-col">
          <div className="my-3 text-xs text-neutral-500 lg:my-5">
            Copyright 20222 <span className="text-white">VinhWeb.com</span> .All Rights Reserve
          </div>
        </div>
      </div>
    </footer>
  );
};
