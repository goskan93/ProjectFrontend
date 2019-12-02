import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const notifySuccess = (text = "Success", props = {}) =>
  toast.success(text, { ...props });
export const notifyError = (text = "Error", props = {}) =>
  toast.error(text, { ...props });
