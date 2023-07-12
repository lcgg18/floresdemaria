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
          <h2>Pagos por el Banco AvVilla</h2>
          <hr />
          <p>Cuenta corriente: 004017240</p>
          <p>Banco AV Villas.</p>
          <p>Nit 901 385 516</p>
          <p>Referencia: torre y apto</p>
          <p>Ejemplo: 5 801</p>
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
