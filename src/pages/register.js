import { Formik, Field, Form } from 'formik'
import Link from 'next/link'
import styles from '../styles/pages/register.module.css'

import { FiArrowLeft } from 'react-icons/fi'
import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext'

import axios from 'axios'



export default function Register() {

  const { openSuccessfulModal, openUnsuccessfulModal } = useContext(ModalContext)

  async function handleSubmit(values, { resetForm }) {
    const data = {
      name: values.name
    }

    try {

      await axios.post('/api/createUser', data)
      openSuccessfulModal()
      resetForm({})

    } catch (err) {
      openUnsuccessfulModal()
    }


  }


  return (
    <div className={styles.registerContainer}>

      <img src="./ilustration.svg" alt="ilustration" />

      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: '',

        }}
      >
        <Form>
          <h1>Faça seu cadastro:</h1>
          <Field type='text' name='name' placeholder='Nome' />

          <button type='submit'>Cadastrar</button>

          <div>
            <Link href='/'><a> <FiArrowLeft size='20' />Voltar para pagina inicial</a></Link>
          </div>

        </Form>


      </Formik>


    </div>
  )
}