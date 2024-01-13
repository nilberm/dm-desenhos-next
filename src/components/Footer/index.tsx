"use client";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { ButtonSocial, FooterComponent, IconsGrid } from "./style";

interface FooterProps {}
export default function Footer(props: FooterProps) {
  return (
    <FooterComponent>
      <IconsGrid>
        <ButtonSocial>
          <FaFacebook />
        </ButtonSocial>

        <ButtonSocial>
          <FaInstagram />
        </ButtonSocial>
        <ButtonSocial>
          <FaWhatsapp />
        </ButtonSocial>
      </IconsGrid>
      <span>Copyright 2024 © DM Desenhos</span>
    </FooterComponent>
  );
}
