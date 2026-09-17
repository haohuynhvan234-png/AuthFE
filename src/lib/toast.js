import toast from "react-hot-toast";

/**
 * Extracts a friendly error message from API response or error object
 * Format: { message: "Mật khẩu hiện tại không đúng", error: "Unauthorized", statusCode: 401 }
 */
export const extractErrorMessage = (err, fallbackMessage = "Đã xảy ra lỗi. Vui lòng thử lại.") => {
  if (typeof err === "string") return err;
  if (err?.response?.data?.message) {
    return err.response.data.message;
  }
  if (err?.response?.data?.error && typeof err.response.data.error === "string") {
    return err.response.data.error;
  }
  if (err?.response?.status === 500) {
    return "Lỗi máy chủ (500). Vui lòng thử lại sau.";
  }
  if (err?.message === "Network Error" || (!err?.response && err?.request)) {
    return "Không thể kết nối tới server Backend. Hãy chắc chắn Backend đang chạy.";
  }
  if (err?.message) {
    return err.message;
  }
  return fallbackMessage;
};

/**
 * Show error toast with custom dark theme styling
 */
export const showToastError = (errOrMessage, fallbackMessage) => {
  const message = typeof errOrMessage === "string" 
    ? errOrMessage 
    : extractErrorMessage(errOrMessage, fallbackMessage);

  return toast.error(message);
};

/**
 * Show success toast with custom dark theme styling
 */
export const showToastSuccess = (message) => {
  return toast.success(message);
};

export default {
  error: showToastError,
  success: showToastSuccess,
  extractErrorMessage,
};