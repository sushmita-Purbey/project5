import { AiOutlineClose } from "react-icons/ai";
import { createPortal} from "react-dom";

const Modal = ({onClose, isOpen, children}) => {

  return createPortal(
    <>
    {isOpen && (
      <div  className="absolute top-0 z-40 backdrop-blur grid h-screen w-screen place-items-center">
      <div className="z-50 m-auto relative min-h-[200px] min-w-[80%] bg-slate-50 p-4">
        <div className="flex justify-end">
          <AiOutlineClose onClick={onClose} 
          className="text-2xl self-end"/>
        </div>
        {children}
    
      </div>
      
      
      </div>
    )}
    </>,
  document.getElementById("modal-root"))
  
}

export default Modal;
