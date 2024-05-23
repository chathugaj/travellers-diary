import {Toast, ToastContainer} from "react-bootstrap";
import appStyles from "../App.module.css";

const SuccessToast = ({message, show}) => {
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