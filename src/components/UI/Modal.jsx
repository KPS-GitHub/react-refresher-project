import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";


function Modal({children}) {
    const navigate = useNavigate();
    function closeHandler() {
        navigate('..'); // works same as file path navigation, making this modal more dynamic - closing the modal will always navigate the user to the modal's parent route
    }

    return <>
        <div onClick={closeHandler} className={classes.backdrop} />
        <dialog open className={classes.modal}>
            {children}
        </dialog>
    </>
}

export default Modal;