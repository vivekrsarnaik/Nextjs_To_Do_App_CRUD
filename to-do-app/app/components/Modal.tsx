import React from "react";

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children?: React.ReactNode;
}


const Modal : React.FC <ModalProps> = ({ modalOpen, setModalOpen, children}) => {
    return (
      <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className='modal-box relative'>
            <label
                onClick={() => setModalOpen(false)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
            {/* if there is a button in form, it will close the modal */}
             ✕
            </label>
         {children}
        </div>
      </div>
    );
};

export default Modal;