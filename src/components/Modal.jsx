import { useState } from "react";
import classes from "./Modal.module.css";

function Modal({children, toggleNewPostVisibleHandler}) {
    return <>
        <div onClick={toggleNewPostVisibleHandler} className={classes.backdrop} />
        <dialog open className={classes.modal}>
            {children}
        </dialog>
    </>
}

export default Modal;