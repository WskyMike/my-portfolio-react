import React from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function renderToastify(
  type,
  message,
  position = null,
  theme = null,
  autoClose = null
) {
  return toast[type](message, {
    position: position || "top-center",
    autoClose: autoClose || 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme || "colored",
    transition: Slide,
  });
}

function Toastify() {
  return <ToastContainer newestOnTop={true} />;
}

export { Toastify, renderToastify };
