import { useParams } from "react-router-dom"
//Componentes
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const DetailPage = () => {
    
    const {id} = useParams();
    
    return (
        <div className='container-general'> 
            <ItemDetailContainer id={id}/>
        </div>
    )
}

export default DetailPage;