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
          <Image src="/App1.png" alt="ProntoPago" width="484" height="212" />
        </div>
      </div> */}
      {/* <div className="imagen">
        <div className="img1">
          <Image src="/ASA1.png" alt="Asamblea" width="484" height="212" />
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
      <p className={styles.description}>Medios de Pagos</p>
      
      <div className={styles.grid}>
        <NextLink href="/avalpay" passHref>
          <a className={styles.card}>
            <p>Pago por PSE AvalPay </p>
          </a>
        </NextLink>
        {/* <NextLink href="/corresponsal" passHref>
          <a className={styles.card}>
            <p>Corresponsal Bancolombia </p>
          </a>
        </NextLink>
        <NextLink href="/bancario" passHref>
          <a className={styles.card}>
            <p>Pagos Bancario </p>
          </a>
        </NextLink> */}
      </div>
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
          href="https://wa.me/573104948976?text=Hola%20te%20hablo%20desde%20la%20%20APP!"
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
