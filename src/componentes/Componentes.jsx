import React, {useState} from "react";


const Eventos = ()=>{
    //estado para el nombre principal
    const [nombre, setnombre] = useState('Hello my friend')

    //estado invisible para cambiar el nombre

    const[isVisible, setVisible] = useState(false);

    const cambiarNombre = () =>{
        setnombre('From changed state!')
    }

    const mostrar =()=>{
        // ! el signo cambia el valor del booleano, osea lo niega, si esta true lo niego y paso a false
        setVisible(!isVisible)
    }

    return(
        <><p>{nombre}</p>
        <button onClick={cambiarNombre}>Cambiar Parrafo</button>
        </>
    )

}

export default Eventos