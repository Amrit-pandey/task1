import { BiHomeAlt2, BiSolidHelpCircle } from "react-icons/bi";
import { SideBarItems } from "./types/types";
import { TbDatabaseDollar } from "react-icons/tb";
import { PiShuffle, PiTextAlignLeftBold } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { BsPower } from "react-icons/bs";

export const SIDEBAR_ITEMS: SideBarItems[] = [
    {
        title: "Face Recogintion",
        path: '/',
        icon: <BiHomeAlt2 size={20}/>
    },
    {
        title: "Daily Visit",
        path: '/daily-visit',
        icon: <TbDatabaseDollar size={20}/>
    },
    {
        title: "Donate",
        path: '/donate',
        icon: <PiTextAlignLeftBold size={20}/>
    },
    {
        title: "Work Orders",
        path: '/work-order',
        icon: <FaPeopleGroup size={20}/>
    },
    {
        title: "Reports",
        path: '/reports',
        icon: <FiSettings size={20}/>
    },
    {
        title: "Report History",
        path: '/history',
        icon: <BiSolidHelpCircle size={20}/>
    },
    {
        title: "Test History",
        path: '/test-history',
        icon: <PiShuffle size={20}/>
    },
    {
        title: "Calender Type",
        path: '/Calender-type',
        icon: <BsPower size={20}/>,
        subMenu: true,
        subMenuItems:  [
            {title: 'MAIN', path: '/main'},
            {title: 'afternoon', path: '/afternoon'},
            {title: 'UI', path: '/ui'}
        ]
    },
]