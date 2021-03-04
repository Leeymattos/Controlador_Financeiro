import Link from 'next/link'
import styles from '../styles/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <img src="./ilustration.svg" alt="ilustration" />
      <h1>Crie um novo usuário ou faça suas contas</h1>
        <main>
        

        <div>
          <Link href='register'> Novo Usuário</Link>
          <Link href='choiceUser'>Fazer Contas</Link>
        </div>

        </main>

    </div>
  )
}
