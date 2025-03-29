/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { FC } from "react";


const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Footer: FC = () => {
  return (
    <div>
      footer
    </div>
  )
}

export default Footer;