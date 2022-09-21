import { toast, ToastContainer } from "react-toastify";

const showSuccessNotification = (message: any) => {

  toast.success(message);

};

const showErrorNotification = (error: any) => {
  toast.error(error);
};

export { showSuccessNotification, showErrorNotification };
