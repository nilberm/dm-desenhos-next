import style from "./style.module.scss";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

interface FooterProps {}
export default function Footer(props: FooterProps) {
  return (
    <footer className={style.footer}>
      <div className={style.iconsGrid}>
        <button className={style.buttonSocial}>
          <FaFacebook />
        </button>

        <button className={style.buttonSocial}>
          <FaInstagram />
        </button>
        <button className={style.buttonSocial}>
          <FaWhatsapp />
        </button>
      </div>
      <span>Copyright 2024 © DM Desenhos</span>
    </footer>
  );
}
