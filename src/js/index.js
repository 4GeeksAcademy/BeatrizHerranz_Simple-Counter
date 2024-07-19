// Importar React y ReactDOM
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SecondsCounter from './component/secondsCounter.jsx';

// Incluir tus estilos personalizados
import "../styles/index.css";

// Componente principal del contador de segundos
const App = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000); // Incrementa cada segundo (1000 ms)

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    const one = Math.floor(counter % 10);
    const ten = Math.floor((counter / 10) % 10);
    const hundred = Math.floor((counter / 100) % 10);
    const thousand = Math.floor((counter / 1000) % 10);
    const tenThousand = Math.floor((counter / 10000) % 10);
    const hundredThousand = Math.floor((counter / 100000) % 10);

    return (
        <SecondsCounter
            digitOne={one}
            digitTen={ten}
            digitHundred={hundred}
            digitThousand={thousand}
            digitTenThousand={tenThousand}
            digitHundredThousand={hundredThousand}
        />
    );
};

// Renderizar el componente principal
ReactDOM.render(<App />, document.getElementById('app'));