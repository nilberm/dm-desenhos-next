import style from "./style.module.scss";

import sample1 from "@/src/assets/images/catalog/sample1.png";
import sample2 from "@/src/assets/images/catalog/sample2.png";
import sample3 from "@/src/assets/images/catalog/sample3.png";
import sample4 from "@/src/assets/images/catalog/sample4.png";
import sample5 from "@/src/assets/images/catalog/sample5.png";
import sample6 from "@/src/assets/images/catalog/sample6.png";
import Image from "next/image";

interface CatalogProps {}
export default function Catalog(props: CatalogProps) {
  return (
    <div className={style.catalog}>
      <button className={style.catalogItem}>
        <Image src={sample1} alt="sample" />
        <span className={style.catalogItemTitle}>Lorem ipsum dolor</span>
      </button>
      <button className={style.catalogItem}>
        <Image src={sample2} alt="sample" />
        <span className={style.catalogItemTitle}>Lorem ipsum dolor</span>
      </button>
      <button className={style.catalogItem}>
        <Image src={sample3} alt="sample" />
        <span className={style.catalogItemTitle}>Lorem ipsum dolor</span>
      </button>
      <button className={style.catalogItem}>
        <Image src={sample4} alt="sample" />
        <span className={style.catalogItemTitle}>Lorem ipsum dolor</span>
      </button>
      <button className={style.catalogItem}>
        <Image src={sample5} alt="sample" />
        <span className={style.catalogItemTitle}>Lorem ipsum dolor</span>
      </button>
      <button className={style.catalogItem}>
        <Image src={sample6} alt="sample" />
        <span className={style.catalogItemTitle}>Lorem ipsum dolor</span>
      </button>
    </div>
  );
}
