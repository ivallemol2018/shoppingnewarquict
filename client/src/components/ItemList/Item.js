import { Link } from 'react-router-dom'
//Componentes
import Button from '@mui/material/Button'


//Estilos
import './Item.scss'

const Item = ({ name, pictureUrl, price, id }) => {
    
    return (
        <div className="p-box">
            <div className="p-top">
                <span className="p-price">$ {price}</span>
            </div>
            <img src={pictureUrl} alt=""/>
            <div className="p-desc">
                <h1 className="p-product">{name}</h1>
                <br/>
                <Link to={`/item/${id}`} className="p-btn"><Button variant="outlined">Detalle</Button></Link>
            </div>
        </div>
    )
}

export default Item;