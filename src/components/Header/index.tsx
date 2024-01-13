"use client";
import { HeaderComnponent } from "./style";

import logo_img from "../../assets/images/logo.png";
import Image from "next/image";

interface HeaderProps {}
export default function Header(props: HeaderProps) {
  return (
    <HeaderComnponent>
      <Image src={logo_img} alt="DM Desenhos" />
    </HeaderComnponent>
  );
}
