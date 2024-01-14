import style from "./style.module.scss";
import logo_img from "../../assets/images/logo.png";
import Image from "next/image";

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <div className={style.header}>
      <Image src={logo_img} alt="DM Desenhos" />
    </div>
  );
}
