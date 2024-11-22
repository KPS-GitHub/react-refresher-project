import classes from "./NewPostForm.module.css";
import { Link, Form, redirect } from "react-router-dom";

function NewPostForm() {
    return (
        <>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} />
                </p>
                <p>
                    <label htmlFor="author">Your name</label>
                    <input type="text" id="author" name="author" required />
                </p>
                <div className={classes.actions}>
                    <Link to="..">Cancel</Link>
                    <button type="submit" >Submit</button>
                </div>
            </Form>
        </>
    );
}

export default NewPostForm;


export async function action({ request }) {
    const formData = await request.formData(); // { body: '...', author: '...' }
    const postData = Object.fromEntries(formData.entries()); // Convert FormData to plain object

    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => console.log("Response data: ", data));

    return redirect(".."); // close form modal by using react router to navigate to parent route
}