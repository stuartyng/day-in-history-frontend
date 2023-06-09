import { toast } from "react-toastify";

const options = {
  autoClose: 5000,
  hideProgressBar: false,
  position: toast.POSITION.TOP_RIGHT,
  pauseOnHover: true,
};

const myToast = {
  success: (message: string) => {
    toast.success(message, options);
  },
  info: (message: string) => {
    toast.info(message, options);
  },
  error: (message: string) => {
    toast.error(message, options);
  },
  warning: (message: string) => {
    toast.warn(message, options);
  },
};

export default myToast;
