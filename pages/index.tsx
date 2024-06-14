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
      description={""}
    >
      <div className="imagen">
        <div className="img1">
          <Image src="/App1.png" alt="Chao" width="968" height="424" />
        </div>
      </div>
      
    </PublicLayout>
  );
};

export default Home;
