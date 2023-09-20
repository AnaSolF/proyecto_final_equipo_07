import React, { useState, useEffect } from "react";
import styles from "../styles/carrito.module.css";
import MyHeader from "@/Components/myHeader";
import MyFooter from "@/Components/MyFooter";
import IconNegocios from "@/Components/Icons/IconNegocios";
import IconHelp from "@/Components/Icons/IconHelp";
import IconLogout from "@/Components/Icons/IconLogout";
import IconCart from "@/Components/Icons/IconCart";
import { useMainContextProvider } from "@/Context/maincontextprovider";
import Card from "react-bootstrap/Card";

//Importo el contexto que quiero usar

const Carrito = (props) => {
  let [contador, setContador] = useState(0);
  const { cart } = useMainContextProvider();
  const { setCart } = useMainContextProvider();
  var newCart = [];

  
  useEffect(()=>{const mostrar = () => {
    if (typeof window !== "undefined") {
      newCart = JSON.parse(localStorage.getItem("cart"));
      setCart(newCart)
      console.log(cart)
  }
  }},[])
  // Función para calcular el precio total
  const calcularPrecioTotal = (precio, cantidad) => {
    return precio * cantidad;
  };


  // Manejar el clic en el botón "Agregar"
  const handleAgregarClick = (producto, cantidad) => {
    const precioTotal = calcularPrecioTotal(producto.precio, cantidad);
    let newCArt = cart.push(producto)
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(precioTotal);
    return precioTotal; 
  };

  const sumar = () => {
    let [total, setTotal] = useState([]);
    total.push(precioTotal)
  }
  
  return (
    <>
      <div className={styles.carritoContainer}>
        <MyHeader
          href="/"
          className="btnNav"
          variant="outline-dark"
          color="black"
          style={{ fontSize: "12px", fontWeight: "700" }}
          textbtn=" Salir"
          textLinkUno="Ayuda en línea"
          textcart=" Mis compras"
          textLinkDos=" Salir"
          textLink=" Salir"
          iconnegocio={<IconNegocios />}
          iconhelp={<IconHelp />}
          iconlogout={<IconLogout />}
        />
        <div className={styles.carrito}>
          <h2>Su carrito está vacío</h2>
          {cart.map((producto, key) => {
            return
            <div key={producto.id} className={styles.products}>
        <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.Title}>
                  {producto.nombre}
                </Card.Title>
                <Card.Text className={styles.p}>
                  {producto.descripcion}
                </Card.Text>
                <Card.Text>
                  <strong>$ {contador * producto.precio}</strong>
                </Card.Text>
                <ButtonPlus cantidad={contador} setCantidad={setContador} />
                <Button
                  //href="/Carrito"
                  variant="outline"
                  onClick={() => {
                    handleAgregarClick(producto, contador);
                  }}
                >
                  <strong>+ Agregar</strong>
                </Button>
              </Card.Body>
            </Card>
        </div>;
         })}
        </div>
        {/* {newCart.map((producto, key) => {
        <div key={producto.id} className={styles.products}>
        <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.Title}>
                  {producto.nombre}
                </Card.Title>
                <Card.Text className={styles.p}>
                  {producto.descripcion}
                </Card.Text>
                <Card.Text>
                  <strong>$ {contador * producto.precio}</strong>
                </Card.Text>
                <ButtonPlus cantidad={contador} setCantidad={setContador} />
                <Button
                  //href="/Carrito"
                  variant="outline"
                  onClick={() => {
                    handleAgregarClick(producto, contador);
                  }}
                >
                  <strong>+ Agregar</strong>
                </Button>
              </Card.Body>
            </Card>
        </div>;
        })}
         */}
        
        
        <MyFooter />
      </div>
    </>
  );
};

export default Carrito;
