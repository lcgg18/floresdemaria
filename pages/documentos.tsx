import NextLink from "next/link";
import PublicLayout from "../layout/PublicLayout";
import styles from "../styles/Home.module.css";

const documentos = () => {
  return (
    <PublicLayout
      name="Documentos del Conjunto"
      content="Documentos del Conjunto Cerrado Flores de Maria"
      description="Documentos del Conjunto Cerrado Flores de Maria"
    >
        <hr />
      <div className={styles.grid}>
        <a href="/MANUAL DE CONVIVENCIA APROBADO ASAMBLEA EXTRAORDINARIA 2022.pdf" className={styles.card1}>
          <p>Manual de Convivencia</p>
        </a>
        {/* <a href="/REGLAMENTO PARA EL USO Y GOCE DE LOS PARQUEADEROS COMUNALES.pdf" className={styles.card1}>
          <p>Uso y goce de Paqueadero</p>
        </a> */}
        <a href="/Reserva salon social flores.pdf" className={styles.card1}>
          <p>Reserva de Salón Social</p>
        </a>
        {/* <a href="/AUTORIZACION CONTRATISTAS.pdf" className={styles.card1}>
          <p>Autorizacion a Contratista</p>
        </a>
        <a href="https://servicioalclienteamarilo.custhelp.com/app/ask/" className={styles.card1}>
          <p>Solicitud de Garantia Amarilo</p>
        </a> */}
      </div>
      <div className="Inicio">
        <NextLink href="/" passHref>
          <p className="Retorno">Regresar al inicio </p>
        </NextLink>
      </div>
    </PublicLayout>
  );
};

export default documentos;
