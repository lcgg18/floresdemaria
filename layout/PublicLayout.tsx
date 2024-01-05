import { FC, ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NextLink from 'next/link';

interface Props {
    children?: ReactNode;
    name: string;
    content: string;
    title?: string;
    description: string;
    
  }


const PublicLayout:FC<Props> = ({children, name, content, title='Bienvenido', description}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Conjunto Cerrado Flores de Maria</title>
        <meta name={name} content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <NextLink href="/" passHref>
        <Image src="/FL1.png" alt="Logo" width={400} height={200} />
      </NextLink> 
      <br />  
      {/* <div className="imagen">
      <div className="img1">
        <Image src="/Valparaiso.jpg" alt="imagen principal" width="420" height="280
        " />
      </div>
      </div> */}
      <br />     
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        {children}
        
      </main>
      <footer className={styles.footer}>
        <span className={styles.subtitle}>
        ASESORIAS Y SERVICIOS GYG SAS® 2024
        </span>
        
      </footer>
    </div>
  );
};

export default PublicLayout;
