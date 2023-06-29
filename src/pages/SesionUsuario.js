import styles from "../styles/sesionUsuario.module.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import Collection from "./Collection";
import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import MyHeader from "@/Components/myHeader";
import MyBanner from "@/Components/MyBanner";
import MyFooter from "@/Components/MyFooter";


export default function SesionUsuario() {
  const [data, setData] = useState([]);
  const { productoId } = useParams();

  return (
    <>
      <div className={styles.grido}>
        <MyHeader
         href="/"
         className="btnNav"
         variant="outline-dark"
         color="black"
         style={{ fontSize: "12px", fontWeight: "700" }}
          text="Salir"
          icon= <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" margin-left="5px" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
        />
        <MyBanner
          src="BannerGrido.png"
          
        ></MyBanner>
         <h2 style={{margin:"50px", textAlign:"center"}}>Nuestros productos</h2>
        <div className={styles.productos}>
          <Collection /></div>
        <MyFooter />
      </div>
    </>
  );
}
