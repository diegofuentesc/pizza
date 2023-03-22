import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ContextoGlobal from '../contexs/ContextoGlobal';

const Detalle = () => {

 const {id} = useParams();

 const {pizzas, agregarPizza} = useContext(ContextoGlobal);

 const idxPizza = pizzas.findIndex ((p) => p.id === id);
 const pizzaDetalle = pizzas[idxPizza];




  return (
  
    <div className='divDetalle'>
      <div className='imgDetalle'>
      <img className='imgDos' variant="top" src={pizzaDetalle.img} />
      </div>
      <div className='texto'>
        <h1>{pizzaDetalle.name}</h1>
          <p className='descripcion'>{pizzaDetalle.desc}
          </p>
          <h5>Ingredientes</h5>
          <ul>
            {
               pizzaDetalle.ingredients.map((i) => <li key={i}>🍕{i}</li>)
            }
          </ul>
        <div>
            <h4>${pizzaDetalle.price}</h4>
        </div>
        <div>
        <Button variant="danger" onClick={() =>agregarPizza(pizzaDetalle)}>🛒Añadir</Button>
        </div>
      </div>
    </div>

   
  )
}

export default Detalle