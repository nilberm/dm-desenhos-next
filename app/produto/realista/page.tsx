"use client";

import Image from "next/image";
import style from "./style.module.scss";

import image1 from "@/src/assets/images/products/image1.png";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};
interface RealistaProps {}
export default function Realista(props: RealistaProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <main className={style.main}>
      <section className={style.productCard}>
        <Image src={image1} alt="" />
        <div className={style.productForm}>
          <div className={style.productDescription}>
            <h2>Lorem ipsum dolor</h2>
            <span>R$ 100,00</span>
            <span>Disponível por encomenda</span>
          </div>
          <div className={style.formComponent}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input defaultValue="test" {...register("example")} />

              {/* include validation with required or other standard HTML validation rules */}
              <input {...register("exampleRequired", { required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
