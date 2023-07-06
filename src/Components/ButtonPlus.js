import { Component } from "react";
import { useState } from "react";

export default function ButtonPlus ( {info} ) {
   
    let [contador, setContador] = useState( 0);
    

    function increment () {
        
    let contPlus = contador + 1;
    setContador(contPlus)
    localStorage.setItem("Mas", contPlus) 
    }

    function decrement() {
        let counter = contador - 1
        if ( counter <= 0 ) {
            counter = 0
        }
        
        let cantidad = setContador(counter);
        localStorage.setItem("Menos", counter) 
    }

    
    return (
        <>  <div style={{ marginBottom: "15px", textAlign:"center"}}>
            <div style={{ margin: "0 auto" }}>
                <button style={{margin:"5px", border:"none"}} onClick={ () => decrement() }>
                    -
                </button>
                <button style={{margin:"5px", border:"none"}} onClick={ () => increment() }>
                    +
            </button>
            </div>
                <br></br>
                <span> Cantidad: {contador} </span></div>
            </>
    )
    
}