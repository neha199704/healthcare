import { FaCalendarDays } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";

import { FcStatistics } from "react-icons/fc";
import { IoIosCall } from "react-icons/io";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { MdOutlineSwapCalls } from "react-icons/md";

const sidebarData = [
  { id: 1, label: "Dashboard", icon: PiSquaresFourFill, active: true },
  { id: 2, label: "History", icon: MdOutlineSwapCalls, active: false },

  { id: 3, label: "Calender", icon: FaCalendarDays, active: false },
  { id: 4, label: "Appointments", icon: CiSquarePlus, active: false },
  { id: 5, label: "Statistics", icon: FcStatistics, active: false },
];

export const tool = [
  { id: 1, label: "Chat", icon: IoChatbubbleEllipses, active: false },
  { id: 2, label: "Support", icon: IoIosCall, active: false },
];
export default sidebarData;
