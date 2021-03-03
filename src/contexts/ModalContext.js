import { createContext, useState } from "react";
import Modal  from "../components/Modal";

 export const ModalContext = createContext()

 export default function ModalProvider({ children }) {

  const [modalIsOpen, setModalIsOpnen] = useState(false)

  const [modalStatusIsSuccessfull, setModalStatusISuccessfull] = useState(false)
 
  
  function openSuccessfulModal() {
    setModalIsOpnen(true)
    setModalStatusISuccessfull(true)
  }

  function openUnsuccessfulModal(){
    setModalIsOpnen(true)
    setModalStatusISuccessfull(false)

  }

  function closeModal() {
    setModalIsOpnen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        openSuccessfulModal,
        openUnsuccessfulModal,
        closeModal,
        modalIsOpen,
        modalStatusIsSuccessfull
      }}
    >
      {children}
      {modalIsOpen && <Modal/>}
    </ModalContext.Provider>
  )
}
