//Componentes
import Dialog from '@mui/material/Dialog'

const Modal = ({handleClose, open , children}) => {
    return(
        <Dialog onClose={handleClose} open={open}>
            {children}
        </Dialog>
    )
}
export default Modal;