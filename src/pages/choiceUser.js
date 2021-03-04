import styles from '../styles/pages/choiceUser.module.css'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import axios from 'axios'
import { PurchaseContext } from '../contexts/PurchaseContext'

export default function ChoiceUser(props) {

  const {setUserIdSelected} = useContext(PurchaseContext)

  const [users, setUsers] = useState([])
  console.log(props.data)
  useEffect(() => {
    axios.get('/api/findUsers').then(response => {
      setUsers(response.data)
    })
  }, [])

  return (
    <div className={styles.choiceUserContainer}>
      <img src="/ilustration.svg" alt="ilustration" />

      <h1>Escolha seu Perfil de Usuário:</h1>
      <main>
        
      
        <select name="users" id="users" onChange={e=> {setUserIdSelected(e.target.value)}}>
          <option value="0">Selecione um usuário</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>

        <Link href='/purchases' >
          <a className={styles.linkNext}>Ir para contas</a>
        </Link>

        <div>
          <Link href='/'><a className={styles.linkBack}> <FiArrowLeft size='20'/>Voltar para página inicial</a></Link>
        </div>

      </main>

    </div>
  )
}

