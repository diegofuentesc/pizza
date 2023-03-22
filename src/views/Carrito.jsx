import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import ContextoGlobal from '../contexs/ContextoGlobal'
import { calculaTotalPedido } from '../utils/utils';

const Carrito = () => {

    const { pizzaPedidas, totalPedido,setPizzaPedidas, setTotalPedido } = useContext(ContextoGlobal);

    const disminuirCantidad = (id) =>{
        const idx = pizzaPedidas.findIndex((p) => p.id === id);

        if(idx >= 0){

            if( pizzaPedidas[idx].cant > 0){


            pizzaPedidas[idx].cant -= 1;

            if(pizzaPedidas[idx].cant === 0){
                pizzaPedidas.splice(idx,1);
            }

            

            setPizzaPedidas([...pizzaPedidas]);
        }
        }

        setTotalPedido(calculaTotalPedido(pizzaPedidas));


    }

    const aumentarCantidad = (id) =>{
        const idx = pizzaPedidas.findIndex((p) => p.id === id);

        if(idx >= 0){
            pizzaPedidas[idx].cant += 1;

            setPizzaPedidas([...pizzaPedidas]);
        }
        setTotalPedido(calculaTotalPedido(pizzaPedidas)); 

    }

    return (
        <div className='p-5'>
            <div className='w-75 m-auto p-5 detalleCarrito'>
            <h3>Detalle del pedido:</h3>
            <div  className='d-flex justify-content-between py-2'>

                    <div className='w-50 d-flex justify-content-between align-items-center'>
                        <h6 className='mb-0 text-capitalize p-2'>Producto</h6>
                    </div>
                    <div className='w-50 d-flex justify-content-end align-items-center'>
                        <h6 className='mb-0 p-2 text-success w-50'>
                           Subtotal
                        </h6>
                        <strong className='w-50 text-center'>Cantidad</strong>
                    </div>
                    </div>
               

                {
                    pizzaPedidas.map((p, i) => {
                        return (<div key={i} className='d-flex justify-content-between py-2'>
                            <div className='w-50 d-flex justify-content-between align-items-center'>
                                <img src={p.img} width='50' alt=''></img>
                                <h6 className='mb-0 text-capitalize p-2'>{p.name}</h6>
                            </div>
                            <div className='d-flex w-50 justify-content-end align-items-center'>
                                <h6 className='mb-0 p-2 text-success w-50'>
                                    ${(p.price * p.cant)}
                                </h6>
                                <div className='w-50 text-center'>
                                <Button variant='danger' onClick={()=>disminuirCantidad(p.id)}>-</Button>
                                <strong className='px-5'>{p.cant}</strong>
                                <Button variant='success' onClick={()=>aumentarCantidad(p.id)}>+</Button>
                                </div>
                            </div>
                        </div>
                        );
                    })
                }
                <div><strong className='total'>Total pedido:{totalPedido}</strong></div>
                <Button className='m-3' variant="success">😎Ir pagar</Button>
            </div>
        </div>
    )
}

export default Carrito

