'use client'

import { SIDEBAR_ITEMS } from "@/SIDEBAR_CONSTANTS"
import { ArrowRight } from "lucide-react"
import { SideBarMenuItems } from "./Sidebar-menu-items"
import classNames from "classnames"
import { Dispatch, SetStateAction } from "react"

export const Sidebar = ({toggleCollapse, setToggleCollapse}: {toggleCollapse: boolean, setToggleCollapse: Dispatch<SetStateAction<boolean>>}) => {
    const asideStyle = classNames("fixed bg-white text-gray-500 w-[20rem] z-50 h-full transition duration-300 ease-in-out border-r-2",
        {
            ['w-[5rem]']: toggleCollapse,
            ['w-[20rem]']:!toggleCollapse
        }
    )

    const sideBarToggle = () => {
        setToggleCollapse(!toggleCollapse)
    }

    return(
        <aside className={asideStyle}>
            <div className="flex justify-center items-center mt-10 text-gray-400 cursor-pointer">
                <ArrowRight size={20} onClick={sideBarToggle}/>
            </div>
            <nav className="flex  flex-col gap-4 transition duration-300 ease-in-out">
                {
                    SIDEBAR_ITEMS.map((item, index) => {
                        return <SideBarMenuItems item={item} toggleCollapse={toggleCollapse}></SideBarMenuItems>
                    })
                }
            </nav>
        </aside>
    )
}