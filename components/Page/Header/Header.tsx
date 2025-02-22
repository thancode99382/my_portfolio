import Link from "next/link";
import { FC, useState } from "react";
import { ButtonMenuMobile } from "./ButtonMenuMobile";
import Image from "next/image";
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";

// export interface IHeaderProps {}

export const Header: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={" w-full "}>
      <nav className={"py-4 "}>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          {/* logo */}
          <Link href={"/"}>
            <div className="flex items-center">
              <span className="relative h-6 mr-3 aspect-square sm:h-9">
                <Image src={"/images/logo-lg.png"} alt="hee" layout={"fill"} />
              </span>

              <span className = {'self-center text-xl font-semibold whitespace-nowrap '} >DatDong</span>
            </div>
          </Link>

          
          <ButtonMenuMobile active={showMenu} onClick={() =>  setShowMenu(!showMenu)} />
          <Navigation/>
        </div>
      </nav>

      <MobileNavigation active = {showMenu} />
    </header>
  );
};
