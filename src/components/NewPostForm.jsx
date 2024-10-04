import { useState } from "react";
import classes from "./NewPostForm.module.css";

function NewPostForm({onBodyChange, onAuthorChange, onSubmit}) {

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={onBodyChange} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={onAuthorChange } />
            </p>
            <button type="submit" >Submit</button>
        </form>
    );
}

export default NewPostForm;