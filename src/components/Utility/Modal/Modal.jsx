import "./Modal.css"
import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import UserProgress from "../../Store/UserProgressCtx";


export default function Modal({ children, className = " "}) {

  const userProgressCtx = useContext(UserProgress);
  const dialog = useRef();

  useEffect(() => {
    if (userProgressCtx.open) {
      dialog.current.showModal();
    }
    else {
      dialog.current.close();
    }
  }, [userProgressCtx.open]);

  

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
    
  );
}
