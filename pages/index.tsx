import type { NextPage } from "next";
import PublicLayout from "../layout/PublicLayout";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <PublicLayout
      name={"Pagina principal"}
      content={"Pagina principal"}
      description={"Pagina Principal"}
    >

      {/* <div className="imagen">
      <div className="img1">
        <Image src="/App1.png" alt="ProntoPago" width="420" height="175" />
      </div>
      </div> */}
      {/* <div className="imagen"></div>
      <div className="img1">
      <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeOd4Cz_Z0AuDJ6cyfFLjzNvRNZtC2lAgEwn-onmf9cN8FerA/viewform?usp=sf_link"
          rel="noopener noreferrer"
          target="_blank"
        >
        <Image src="/AD1.png" alt="Actualizacion de datos" width="420" height="175" />
        </a>
      </div>
      </div>  */}
      
      <div className={styles.grid}>
        <a
          href="https://www.pagosvirtualesavvillas.com.co/personal/pagos/13750"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <p>Pagos por PSE</p>
        </a>
        <NextLink href="/efecty" passHref>
          <a className={styles.card}>
            <p>Pagos Por Efecty </p>
          </a>
        </NextLink>
        <NextLink href="/bancario" passHref>
          <a className={styles.card}>
            <p>Pagos Bancario </p>
          </a>
        </NextLink>
      </div>
        <h3>Pagos por Datafono en la Oficina</h3>
      <p className={styles.description}>Documentos</p>
      <div className={styles.grid}>
        <NextLink href="/documentos" passHref>
          <a className={styles.card}>
            <p>Documentos</p>
          </a>
        </NextLink>
      </div>
      <p className={styles.description}>Metodos de Contacto</p>
      <div className={styles.grid}>
        <a
          href="https://wa.me/573104948976?text=Hola%20!"
          className={styles.card}
        >
          <p>WhatsApp </p>
        </a>
        <a href="mailto:floresdemaria4595@gmail.com" className={styles.card}>
          <p>Correo Electronico</p>
        </a>
      </div>
    </PublicLayout>
  );
};

export default Home;
