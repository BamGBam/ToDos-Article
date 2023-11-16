import { useRef } from "react";


const UnControlledForm = () =>{
    const ref = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(ref.current.value);
    };
    return(
        <>
        <h1>Uncontrolled Form</h1>
        <from onSubmit ={handleSubmit}>
            <label>
                First Name: <inpout type="text" ref={ref} />
            </label>
            <input type="submit"/>
        </from>
        </>
    );
};

export default UnControlledForm;