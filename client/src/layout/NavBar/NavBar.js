import { Link } from 'react-router-dom' 
import React from 'react'
//Componentes
import CartWidget from '../../components/CartWidget/CartWidget'
import Button from '@mui/material/Button'

//Base de datos

//Estilos
import './NavBar.scss'
import { useCartContext } from '../../context/CartContext'

const NavBar = () => {

    const { user,logout } = useCartContext()

    const onLogout = ()=>{
        logout()
    }

    return (
        <header className='main-header'>
            <div className='container-logo'>
                <Link to={'/'}></Link>
            </div>
            <ul className='navbar'>
                <li key='1'>
                    <Button>
                        <Link to=''>Home</Link>
                    </Button>
                </li>
            </ul>
            <div>
            { 
                (typeof user.username === 'undefined')? 
                (<Link to={'/login'}>
                    <button type="submit" 
                            className="inline-flex 
                                    justify-center 
                                    rounded-md border 
                                    border-gray-300  
                                    py-2 
                                    px-4 text-sm leading-5 font-medium"
                    >
                        Login
                    </button>
                </Link>):(                
                    <button type="submit" 
                            className="inline-flex 
                                    justify-center 
                                    rounded-md border 
                                    border-gray-300  
                                    py-2 
                                    px-4 text-sm leading-5 font-medium"
                            onClick={onLogout}
                    >
                        Logout
                    </button>
                    )    
            }
            { 
                (typeof user.username !== 'undefined')? 
                    <span className='ml-5'>{`Bienvenido: ${user.name}`}</span> : null  
            }      
            </div>
            <CartWidget />
        </header>
    )
}

export default NavBar;