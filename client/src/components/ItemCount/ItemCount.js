import React, { useState } from 'react'
//Componentes
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

//Estilos
import './ItemCount.scss'

const ItemCount = ({ stock, initial, action }) => {

    const [ count, setCount ] = useState(initial);

    const addProduct = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    
    const removeProduct = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className='ContainerItemCount'>
                <div className='ButtonsGroup'>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={removeProduct}>-</Button>
                        <Tooltip title='Cantidad'>
                            <Button>{count}</Button>
                        </Tooltip>
                        <Button onClick={addProduct}>+</Button>
                    </ButtonGroup>
                </div>
                <p className='availableStock'>Stock disponible: {stock}</p>
                <div className='btnBuy'>
                    <Button variant="outlined" onClick={ (e) => action(e, count)}>Agregar al carrito</Button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;