import { useContext } from "react"
import { ModalContext } from "../contexts/ModalContext"

import {FaWindowClose} from 'react-icons/fa'
import styles from '../styles/components/Modal.module.css'

export default function Modal() {
  const { closeModal, modalStatusIsSuccessfull } = useContext(ModalContext)
  console.log(modalStatusIsSuccessfull) 
  return (
    <div className={styles.overlay}>
      <div>
        <header>{modalStatusIsSuccessfull ? 'Sucesso!': 'Algo deu errado!' }</header>
        <strong>{modalStatusIsSuccessfull ? 'Usuário cadastrado!' : 'Usuário não cadastradado'}</strong>
        {modalStatusIsSuccessfull ? <img src='./right.svg' alt='Certo'/>: <img src='./error.svg' alt='Erro' />}
        <button onClick={closeModal}><FaWindowClose size='25' color='red'/></button>
      </div>
    </div>
  )
}