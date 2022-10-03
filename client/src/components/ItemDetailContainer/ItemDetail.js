import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react"
//Componentes
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material'

//Estilos
import './ItemDetail.scss'

const ItemDetail = ({item}) => {

    const {'nombre':name, 'foto': pictureUrl, 'precio': price, 'detalle': detail, stock} = item;

    const [counter, setCounter] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);
    const { addToCart } = useCartContext();

    const onAdd = (e, count) => {
        addToCart( {...item, quantity: count})
        if(!!e & counter<1){
            setCounter(count);
        }
    }

    useEffect( () => {
        if(counter > 0) {
            setShowItemCount(false);
        }
    },[counter]);
    
    return (
        <div className="ItemDetail-container">
            <div className="Item-container">
                <div className='img-container'>
                    <img src={pictureUrl} alt=''></img>
                </div>
                <div className='ItemDetail-details'>
                    <h2 className='ItemDetail-title'>{name}</h2>             
                    <span className='ItemDetail-price'><b>usd ${price}</b></span>
                    <p>{detail}</p>
                    <div>
                        {   
                            showItemCount ? (
                                <div>
                                    <ItemCount stock={stock} action={onAdd} initial={1} />
                                </div>
                                ) : (
                                <div className='btnIrAlCarrito'>
                                    <Link to={'/Cart'}><Button variant="outlined">Ir al carrito</Button></Link>
                                    <Link to={'/'}><Button variant="outlined">Seguir comprando</Button></Link>
                                </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;