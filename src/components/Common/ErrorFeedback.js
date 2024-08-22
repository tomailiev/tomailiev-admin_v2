import { useContext } from "react";
import ErrorContext from "../../context/ErrorContext";
import { Alert, AlertTitle, Snackbar } from "@mui/material";

const ErrorFeedback = () => {

    const { error, setError } = useContext(ErrorContext);
    function handleClose() {
        setError(null);
    }
    return (
        <Snackbar
            open={!!error}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            onClose={handleClose}
            autoHideDuration={6000}
        >
            <Alert onClose={handleClose} severity={error?.severity} sx={{ width: '100%' }}>
                <AlertTitle sx={{ textTransform: 'capitalize' }}>{error?.severity}</AlertTitle>
                {error?.message || 'Something went'}
            </Alert>
        </Snackbar>
    );
};

export default ErrorFeedback;