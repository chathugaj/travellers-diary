import {Toast, ToastContainer} from "react-bootstrap";
import appStyles from "../App.module.css";
import {useEffect, useState} from "react";

const SuccessToast = ({message, display}) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(display)
        setTimeout(() => setShow(false), 5000)
    }, []);

    return (
        <ToastContainer position="top-center" className={appStyles.ContentContainer}>
            <Toast
                show={show}
                className="d-inline-block m-1"
                bg="dark"
                autohide
                delay={3000}
            >
                <Toast.Body className="text-white">
                    {message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default SuccessToast;