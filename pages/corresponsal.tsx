import styles from "../styles/Home.module.css";
import PublicLayout from '../layout/PublicLayout';
import NextLink from 'next/link';

const Efecty = () => {
  return (
    <PublicLayout
      name="Pagos por Corresponsal Bancolombia"
      content="Forma de realizar Corresponsal Bancolombia "
      description={"Pagos  por Corresponsal Bancolombia"}
    >
      <div className={styles.grid}>
        <div className={styles.card1}>
          <h2>Forma de Hacerlo</h2>
          <hr />
          <h3>Convenio: 80052 </h3>
          <p>Referencia Casa</p>
          <p>Ejemplo:</p>
             <p>Manzana A casa 1  A {'=>'} 100101 </p>
             <p>Manzana B casa 12 B {'=>'} 111202 </p>
             <p>Manzana C casa 22 A {'=>'} 132201 </p>
             <p>Manzana D casa 13 B {'=>'} 141302 </p>
        </div>
      </div>
      <div className="Inicio">
        <NextLink href="/" passHref>
          <p className="Retorno">Regresar al inicio </p>
        </NextLink>
      </div>
    </PublicLayout>
  );
  
}

export default Efecty