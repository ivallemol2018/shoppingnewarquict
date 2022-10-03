//Componentes
import _ from 'lodash';
import Item from './Item'


//Estilos
import './ItemList.scss'

const ItemList = ({products}) => {
    return (
        <div className="product-list-container">
            { _.map(products,({id,nombre,foto,precio,stock}) => {
                return (
                    <div>
                        <Item
                            name={nombre}
                            pictureUrl={foto}
                            price={precio}
                            stock={stock}
                            id={id}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;