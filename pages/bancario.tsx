import PublicLayout from "../layout/PublicLayout";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";

const Bancario = () => {
  return (
    <PublicLayout
      name="Pagos bancarios"
      content="Forma de realizar pagos bancarios"
      description={"Pagos bancarios"}
    >
      <div className={styles.grid}>
        <div className={styles.card1}>
          <h2>Pagos por el Bancolombia</h2>
          <hr />
          <p>Cuenta de ahorros </p>
          <p>524-810018-97</p>
          <p>Bancolombia.</p>
          <p>Nit 901 107 284</p>
          <p>Referencia Casa</p>
          <p>Ejemplo:</p>
             <h4>Manzana A casa 1  A {'=>'} 100101 </h4>
             <h4>Manzana B casa 12 B {'=>'} 111202 </h4>
             <h4>Manzana C casa 22 A {'=>'} 132201 </h4>
             <h4>Manzana D casa 13 B {'=>'} 141302 </h4>
             
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

export default Bancario;
