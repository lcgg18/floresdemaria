import styles from "../styles/Home.module.css";
import PublicLayout from "../layout/PublicLayout";
import NextLink from "next/link";
import Image from "next/image";

const Avalpay = () => {
  return (
    <PublicLayout
      name="Pagos por PSE Avalpay"
      content="Forma de realizar por PSE Avalpay "
      description={"Pagos por PSE Avalpay"}
    >
      <div className={styles.grid}>
        <div className={styles.card1}>
          <h2>Forma de Hacerlo</h2>
          <hr />
          <a
            href="https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago?idConv=00024969&origen=buscar"
            className={styles.card1}
          >
            <Image src="/PSE.png" alt="PAGO POR PSE" width="212" height="212" />
            <h2> Presiona Aquí </h2>
          </a>
          <p>Referencia Casa</p>
          <p>Ejemplo:</p>
          <h4>Manzana A casa 1 A {"=>"} 110101 </h4>
          <h4>Manzana B casa 12 B {"=>"} 121202 </h4>
          <h4>Manzana C casa 22 A {"=>"} 132201 </h4>
          <h4>Manzana D casa 13 B {"=>"} 141302 </h4>
        </div>
      </div>
      <div className="Inicio">
        <NextLink href="/" passHref>
          <p className="Retorno">Regresar al inicio </p>
        </NextLink>
      </div>
    </PublicLayout>
  );
};

export default Avalpay;
