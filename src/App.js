import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextoGlobal from "./contexs/ContextoGlobal.jsx";
import Home from "./views/Home.jsx";
import Carrito from "./views/Carrito.jsx";
import Detalle from "./views/Detalle.jsx";
import Barra from "./componets/Barra.jsx";
import './style/style.css';




function App() {

  const [pizzas, setPizzas] = useState([]);
  const [pizzaPedidas, setPizzaPedidas] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);


  const getPizzas = async () => {
    const res = await fetch(`http://localhost:3000/pizzas.json`);
    const data = await res.json();
    setPizzas(data);

  }

  useEffect(() => {

    getPizzas();

  }, []);

  const agregarPizza = (pizza) => {

    const idx = pizzaPedidas.findIndex((p) => p.id === pizza.id);

    if(idx > -1){

        pizzaPedidas[idx].cant +=1;
        setPizzaPedidas([...pizzaPedidas]);


    }else{

        const pizzaSeleccionada = {id:pizza.id, name: pizza.name, price:pizza.price, cant:1, img:pizza.img};
        setPizzaPedidas([...pizzaPedidas, pizzaSeleccionada]);

    }

    setTotalPedido(totalPedido+pizza.price);
    

}




  return (
    <div>
      <ContextoGlobal.Provider value={{pizzas, pizzaPedidas, setPizzaPedidas, setTotalPedido, totalPedido, agregarPizza}}>
      <BrowserRouter>
      <Barra></Barra>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/carrito" element={<Carrito></Carrito>}></Route>
          <Route path="/detalle/:id" element={<Detalle></Detalle>}></Route>
        </Routes>
      </BrowserRouter>
      </ContextoGlobal.Provider>
    </div>
  );
}

export default App;
