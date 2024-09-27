import { useState } from "react";
import classes from "./NewPostForm.module.css";

function NewPostForm() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredName, setEnteredName] = useState('');

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }
    function changeNameHandler(event) {
        setEnteredName(event.target.value);
    }

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={changeBodyHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={changeNameHandler } />
            </p>
        </form>
    );
}

export default NewPostForm;