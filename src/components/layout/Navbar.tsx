/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";

import ArkavLogo from "@/../public/images/logo-arkavidia.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Event",
    link: "#",
    children: [
      {
        label: "Arkavia Academya",
        link: "#"
      },
      {
        label: "Arkavia for Indonesia",
        link: "#"
      },
      {
        label: "Arkavia Goes To School",
        link: "#"
      },
      {
        label: "Arkavia Talks",
        link: "#"
      },
      {
        label: "IT Fest",
        link: "#"
      }
    ]
  },
  {
    label: "Competition",
    link: "#",
    children: [
      {
        label: "Competitive Programming",
        link: "#"
      },
      {
        label: "Datavidia",
        link: "#"
      },
      {
        label: "Arkalogica",
        link: "#"
      },
      {
        label: "UXvidia",
        link: "#"
      }
    ]
  }
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto text-blue-900 font-archivo font-bold flex w-[80%] max-w-7xl justify-between px-16 py-5 text-md mt-4 border-2 border-black rounded-[60px]">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <Image 
          width={50}
          height={50}
          src={ArkavLogo}
          alt={"Arkav Logo"}
          className="cursor-pointer"
        />
        
      </section>

      {/* right side data */}
      <section className=" hidden md:flex items-center gap-16 ">
      {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-12 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group px-2 py-3 transition-all "
            >
              <div className="relative group">
                <div className="flex cursor-pointer items-center gap-2 text-blue-900 group-hover:border-b-2 group-hover:border-blue-900">
                  <span>{d.label}</span>
                  {d.children && (
                    <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                  )}
                </div>

                {/* dropdown */}
                {d.children && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 hidden w-auto  flex-col gap-1 border-2 border-black rounded-2xl bg-white py-3 shadow-md  transition-all group-hover:flex ">
                    {d.children.map((ch, i) => (
                      <Link
                        key={i}
                        href={ch.link ?? "#"}
                        className=" flex cursor-pointer items-center py-1 pl-2 pt-2 pr-8  text-blue-900 hover:text-white hover:bg-blue-900  "
                      >
                        {/* image */}
                        {ch.iconImage && (
                          <Image src={ch.iconImage} alt="item-icon" />
                        )}
                        {/* item */}
                        <span className="whitespace-nowrap   pl-3 ">
                          {ch.label}
                        </span>
                      </Link>
                    ))}
                </div>
              )}
              </div>
            </Link>
          ))}
        </div>

        <button className="h-fit rounded-xl border-2 border-blue-900 px-8 py-2 text-blue-900 transition-all hover:bg-blue-900 hover:text-white">
          Sign In | Sign Up
        </button>
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 ">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-blue-900 px-4 py-2 text-blue-900 transition-all hover:bg-blue-900 hover:text-white">
            Sign In | Sign Up
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-blue-900 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-blue-900 hover:bg-blue-900 hover:text-white "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
