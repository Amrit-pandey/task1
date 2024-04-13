"use client";

import { SideBarItems } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

export const SideBarMenuItems = ({
  item,
  toggleCollapse,
}: {
  item: SideBarItems;
  toggleCollapse: boolean;
}) => {
  const linkStyle =
    "flex items-center min-h-[40px] h-full text-gray-600 font-semibold py-2 px-4 duration-200 rounded-full border-r-1";
  const subLinkStyle = linkStyle;
  const activeLinkStyle = "rounded-full bg-green-100 px-4 py-2 w-full";

  //   active the current path
  const pathName = usePathname();

  //   Toggling the subMenus
  const [subMenuToggle, setSubMenuToggle] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuToggle(!subMenuToggle);
  };

  return (
    <>
      {item.subMenu ? (
        <div className="rounded-full min-w-[18px]">
          <a
            className={`${subLinkStyle} ${
              pathName.includes(item.path) ? activeLinkStyle : ""
            }`}
            onClick={toggleSubMenu}
          >
            {item.icon}
            {!toggleCollapse && 
              <>
                <span className="ml-3 text-base  leading-6 font-semibold cursor-pointer">
                  {item.title}
                </span>
               { !toggleCollapse ? <BsChevronRight className="ml-auto text-xs stroke-2 text-gray-400" /> : ""}
              </>
            }
            
          </a>

          {subMenuToggle && (
            <div className="bg-white ">
              <div className="grid gap-y-4 px-20 py-3 leading-5">
                {item.subMenuItems?.map((subitem, index) => (
                  <Link
                    key={index}
                    href={subitem.path}
                    className={`${
                      subitem.path === pathName ? activeLinkStyle : ""
                    }`}
                  >
                    <span>{subitem.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href={item.path}
          className={`${linkStyle} ${
            item.path === pathName ? activeLinkStyle : ""
          }`}
        >
          {item.icon}
          {!toggleCollapse && (
            <span className="ml-3 leading-6 mt-2"> {item.title}</span>
          )}
          <BsChevronRight
            className={`ml-auto text-sm stroke-2 ${
              item.path === pathName ? "text-green-400" : " text-gray-400"
            }`}
          />
        </Link>
      )}
    </>
  );
};
