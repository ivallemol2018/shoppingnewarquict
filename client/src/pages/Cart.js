import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
//Componentes
import { useCartContext } from '../context/CartContext'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import Modal from '../components/Modal/Modal'
import IconButton from '@mui/material/IconButton'
import Check from '../assets/images/check.gif'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete'

//Base de datos
// import db from "../firebase"
/// import { addDoc, collection } from "firebase/firestore"

//Table 
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

//Estilos
import CartScss from './Cart.scss'

const CartWidget = () => {

    const { user, cartList, removeOne, emptyCart, totalAmount, processOrder } = useCartContext();
    const [openModal, setOpenModal] = useState(false);
    const [successOrder, setSuccessOrder] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate ();

    const onProccess = () =>{
        if(typeof user.username !== 'undefined')
            setOpenModal(true)
        else
            navigate("/login");
    }

    const onSubmit = async ( ) => {
        const response = await processOrder()

        if(response.status === 200) setSuccessOrder(true)

    }

    return (
        <>
            <div className='Checkout-container'>
                    <h1>Carrito</h1>
                { typeof cartList.id === 'undefined' ? (

                    <div className='NoItems-container'>
                        <p>¡No hay productos en el carrito!</p>
                        <Link to='/'>
                            <Button variant="outlined">Ver productos</Button>
                        </Link>
                    </div>
                ) : (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Descripcion</TableCell>
                                    <TableCell align="right">Cantidad</TableCell>
                                    <TableCell align="right">Precio</TableCell>
                                    <TableCell align="right">Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {cartList.products.map((prod) => (
                                <TableRow key={prod.id}>
                                    <TableCell>{prod.nombre}</TableCell>
                                    <TableCell align="right">{prod.quantity}</TableCell>
                                    <TableCell align="right">$ {prod.precio}</TableCell>
                                    <TableCell align="right">
                                        <Tooltip title="Eliminar">
                                            <IconButton onClick={() => removeOne(cartList.id,prod.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">$ {totalAmount()}</TableCell>
                                <TableCell align="right"><Button variant="outlined" onClick={onProccess}>Realizar compra</Button></TableCell>
                            </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
                    <>
                        {( typeof cartList.id !== 'undefined')
                        &&
                        <div className='btnVolver-container'>
                            <Button variant="outlined" onClick={emptyCart}>Vaciar carrito</Button>
                        </div>}
                    </>
            </div>
            <Modal handleClose={() => setOpenModal(false)} open={openModal}>
            {successOrder ? (
                <div>
                        <h3>Orden registrada</h3>
                        <img src={Check} alt='icono de verificacion'/>
                        <Link to='/'>
                            <Button variant="outlined" onClick={emptyCart}>Aceptar</Button>
                        </Link>
                </div>
            ) : (
                <>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">RESUMEN DE TU PEDIDO</h3>
                    </div>
                    <div className="border-t border-gray-200">
                    <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.name}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.username}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">phone</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.phone}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Total</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$ {totalAmount()}</dd>
                    </div>
                    </dl>
                </div>
                </div>
                    <div className='fieldset'>
                        <Button variant="outlined" type="submit">Finalizar</Button>
                    </div>
                </form>
                </>
            )}
            </Modal>            
        </>
    )}

export default CartWidget;