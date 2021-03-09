import styles from '../styles/pages/choiceUser.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import Router from 'next/router'
import axios from 'axios'


export default function ChoiceUser(props) {
  const [users, setUsers] = useState([])

  const [userId, setUserId] = useState('')

 function navigate(){
    Router.push({
      pathname: 'purchases',
      query: {userId: userId}
    })
  }

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
        
      
        <select name="users" id="users" onChange={e => setUserId(e.target.value)} value={userId}>
          <option value="0">Selecione um usuário</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>

        <button onClick={navigate} className={styles.linkNext}>ir para contas</button>

        <div>
          <Link href='/'><a className={styles.linkBack}> <FiArrowLeft size='20'/>Voltar para página inicial</a></Link>
        </div>

      </main>

    </div>
  )
}

