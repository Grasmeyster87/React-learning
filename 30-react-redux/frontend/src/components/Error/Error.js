import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { clearError, selectorErrorMessage } from '../../redux/slices/errorSlice';

const Error = () => {
    //  toast.info("Test message!");
    //  toast.warn("Test message!");

    const errorMessage = useSelector(selectorErrorMessage);
    const dispatch = useDispatch();
    useEffect(() => {
        if (errorMessage) {
            toast.info(errorMessage);
            dispatch(clearError());
        }
    }, [errorMessage, dispatch]);
    return <ToastContainer position="top-right" autoClose={2000} />;
};
export default Error;