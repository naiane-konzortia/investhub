
import React from "react";
import 'react-toastify/dist/ReactToastify.css';


export const ToastMessage: React.FC<{message:any, type: string}> = function ({
    message,
}) {
    
  return (
    message && (
      <>
        <span style={{ marginLeft: "8px" }}>{message}</span>
      </>
    )
  );
};
