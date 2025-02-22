import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer >
      <div className="container relative text-center">
        <div className="flex flex-col">
          <div className="my-3 text-xs text-neutral-500 lg:my-5">
              <span className="text-white">@DatDong.com</span> 
          </div>
        </div>
      </div>
    </footer>
  );
};
