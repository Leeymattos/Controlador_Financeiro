import styles from '../styles/components/MainHome.module.css'
import Link from 'next/link'

export default function MainHome(){
  return(
    <div className={styles.containerMainHome}>
      <img src="./ilustration.svg" alt="ilustration"/>
      <h1>Crie um novo usuário ou faça suas contas</h1>

      <div>
        
        <Link href='register'> Novo Usuário</Link>
        <Link href='choiceUser'>Fazer Contas</Link>
      </div>
    </div>
  )
}