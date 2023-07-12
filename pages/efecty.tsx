import styles from "../styles/Home.module.css";
import PublicLayout from '../layout/PublicLayout';
import NextLink from 'next/link';

const Efecty = () => {
  return (
    <PublicLayout
      name="Pagos por Efecty"
      content="Forma de realizar pagos por Efecty"
      description={"Pagos  por Efecty"}
    >
      <div className={styles.grid}>
        <div className={styles.card1}>
          <h2>Forma de Hacerlo</h2>
          <hr />
          <p>Convenio: 15397</p>
          <p>Referencia: torre y apto</p>
          <p>Ejemplo: 9 1101</p>
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