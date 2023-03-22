import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ContextoGlobal from '../contexs/ContextoGlobal'

const Barra = () => {

    const { totalPedido } = useContext(ContextoGlobal);
    return (


        <Navbar bg="danger" variant="dark">
            <Container>
                <NavLink style={{textDecoration: 'none', color:'white', fontSize:'20px', fontFamily:'cursive'}} to="/">🍕Pizza mamma mia!!</NavLink>
                <NavLink style={{textDecoration: 'none', color:'white'}} to="/carrito">🛒Mi carrito[${totalPedido}] </NavLink>
            </Container>
        </Navbar>
    )
}

export default Barra