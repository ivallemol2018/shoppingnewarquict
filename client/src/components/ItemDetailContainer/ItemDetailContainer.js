import React, { useState, useEffect } from 'react'
//Componentes
import ItemDetail from './ItemDetail'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import getProduct from '../../helpers/getProduct'

//Estilos
import './ItemDetailContainer.scss'

const ItemDetailContainer = ({id}) => {

    const [item, setItem] = useState([]);

    useEffect( () => {
        getProduct(id).then( (data) => {
            const itemFound = data
            
            setItem(itemFound);
        })
        return () => {
            setItem({});
        }}, [id]);

    return (
        <>
            {item.length === 0 ? (
                <Box className='loader'>
                    <CircularProgress />
                </Box>
            ) : (
            <div className='ItemDetailContainer-container'>
                <ItemDetail item={item} />
            </div>
            )}
        </>      
    )
}

export default ItemDetailContainer;