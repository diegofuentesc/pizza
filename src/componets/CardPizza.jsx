import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ContextoGlobal from '../contexs/ContextoGlobal';


function CardPizza({pizza}) {

    const navigate = useNavigate();

    const {agregarPizza} = useContext(ContextoGlobal);

    const verDetalle = ()  => {
        navigate(`/detalle/${pizza.id}`)
    }

    
  return (
    <div className="container">
    <Card style={{ width: '18rem' }} className='tarjetas'>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <div>
          <h6>Ingredientes</h6>
          <ul>
            {
               pizza.ingredients.map((i) => <li className='listado' key={i}>🍕{i}</li>)
            }
          </ul>
        </div>
        <div>
            <h4>${pizza.price}</h4>
        </div>
        <div className='btnCard'> 
        <Button className='btnDetalle' variant="primary" onClick={() => verDetalle()}>👀Ver más</Button>
        <Button className='btnAgregar' variant="danger" onClick={() =>agregarPizza(pizza)}>🛒Añadir</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardPizza;