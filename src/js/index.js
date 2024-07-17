// Importar React y ReactDOM
import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from './component/secondsCounter.jsx';

// Incluir estilos de Bootstrap en el bundle de webpack
import "bootstrap/dist/css/bootstrap.min.css";

// Incluir tus estilos personalizados
import "../styles/index.css";

// Inicializar el contador en centésimas de segundo
let counter = 0;

// Función para actualizar el contador y renderizar el componente
const updateCounter = () => {
    const CentSegundos = counter % 10;
    const Segundos = Math.floor(counter / 10) % 60;
    const Minutos = Math.floor(counter / 600);
    counter++;

    // Renderizar el componente SecondsCounter
    ReactDOM.render(
        <SecondsCounter
            CentSegundos={CentSegundos}
            Segundos={Segundos}
            Minutos={Minutos}
        />,
        document.getElementById('app')
    );
};

// Configurar el intervalo para actualizar el contador cada 100ms
const contadorRounds = setInterval(updateCounter, 100);

// Renderizar inicialmente el componente SecondsCounter
ReactDOM.render(
    <SecondsCounter Minutos={0} Segundos={0} CentSegundos={0} />,
    document.getElementById('app')
);