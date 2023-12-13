import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle ,useRef } from "react";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className=" px-8 py-4 rounded-lg justify-center items-center text-lg">
        {children}
        <form method="dialog" className="mt-5">
            <Button >Close</Button>
        </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
