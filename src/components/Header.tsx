import { logo } from "@/assets";
import { LuSearch } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { PiBag } from "react-icons/pi";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about-us" },
  { name: "SHOP", href: "/products" },
  { name: "CONTACT", href: "/contact" },
];
const Header = () => {
  return (
    <header className="h-[69px] bg-white text-[#1F2937] flex items-center justify-between md:px-[84px]">
      <figure>
        <Image src={logo} alt={"Bran Logo"}  />
      </figure>
      <nav className="flex gap-[10px]">
        {navItems.map((el, index) => (
          <Link key={index} href={el.href} className="text-xs leading-[135%] font-semibold">
           {el.name}
          </Link>
        ))}
      </nav>
      <div className="flex gap-[10px]">
        <PiBag size={18} />
        <LuSearch size={18} />
      </div>
    </header>
  );
};

export default Header;
