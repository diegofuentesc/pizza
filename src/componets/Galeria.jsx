import React, { useContext } from 'react'
import {Row, Col} from 'react-bootstrap';
import ContextoGlobal from '../contexs/ContextoGlobal.jsx'
import CardPizza from './CardPizza.jsx';

const Galeria = () => {
    const {pizzas} = useContext(ContextoGlobal);
  return (
    <div className='container'>

    <Row>
        {
            pizzas.map((pizza, i) => {
                return <Col key={i}><CardPizza pizza={pizza} ></CardPizza></Col>
            })
        }

    </Row>

    </div>
  )
}

export default Galeria