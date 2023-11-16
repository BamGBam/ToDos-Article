import { useState, useEffect, useRef } from "react";
const Form = () => {
    const hadleChange = (e) => {
        setFname(e.target.value);
    };

    const [fname, setFname] = useState()
    return (
        <>
        <h1>React form handling</h1>
        <form>
            <label>
                First Name: <input type="text" value ={fname} onChange={hadleChange}/>
            </label>
        </form>
        <h5> First Name: {fname}</h5>
        </>
    );
};

export default Form;