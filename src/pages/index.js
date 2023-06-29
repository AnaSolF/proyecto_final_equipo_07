import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainContextProvider from "@/Context/maincontextprovider";
import MyMain from "@/Components/myMain";
import "@fontsource/roboto/400.css";
import  "../firebase/InitConfig"

const inter = Inter({ subsets: ["latin"] });

export default function Home(main) {
  return (
    <>
      <Head>
        <title>Pedi Ya comida en instantes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LogoP.png" />
      </Head>
     
      <MainContextProvider>
        <main className={`${styles.main} ${inter.className}`}>
          <MyMain />
        </main>
      </MainContextProvider>
    </>
  );
}
