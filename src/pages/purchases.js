import { Field, Form, Formik } from "formik"
import { useContext, useEffect, useRef, useState } from "react"
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

import { PurchaseContext } from "../contexts/PurchaseContext"

import styles from '../styles/pages/purchase.module.css'
import axios from "axios"
import { ModalContext } from "../contexts/ModalContext"


export default function Purchases() {

  const textinput = useRef(null)

  const { userIdSelected } = useContext(PurchaseContext)

  const { openUnsuccessfulModal } = useContext(ModalContext)

  const [purchases, setPurchases] = useState([])


  useEffect(() => {
    axios.get('/api/findPurchases', {
      headers: {
        authorization: {
          userId: userIdSelected
        }
      }
    }).then(response => {
      setPurchases(response.data)
    })
    
  }, [userIdSelected, purchases])

  console.log(purchases)

  async function handleSubmit(values, { resetForm }) {

    const data = {
      purchaseName: values.purchaseName,
      date: values.date,
      value: values.value,
      payment: values.payment
    }

    try {
      await axios.post('/api/createPurchase', data, {
        headers: {
          authorization: {
            userId: userIdSelected
          }
        }
      })
      resetForm({})
    } catch (err) {
      openUnsuccessfulModal()
    }
  }

  return (
    <>
      <div className={styles.purchaseContainer}>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            purchaseName: '',
            date: '',
            value: '',
            payment: ''
          }}
        >
          <Form>
            <img src="./ilustration2.svg" alt="ilustration2" />
            <div>

              <h1> Insira os dados da sua compra: </h1>
              <Field type='text' ref={textinput} name='purchaseName' placeholder='Compra' id='first' autoFocus />
              <Field type='text' name='date' placeholder='Data' />
              <Field type='text' name='value' placeholder='Valor' />
              <Field type='text' name='payment' placeholder='Forma de pagamento' />

              <button>Cadastrar</button>
            </div>

          </Form>
        </Formik>

        <div>

          <div>
            <ol>
              {purchases.map(purchase => (
                <li>
                  {purchase.purchaseName}
                </li>

              ))}

            </ol>
            <div></div>
          </div>
          <img src="ilustration2inverse.svg" alt="ilustration2" />
        </div>

        <Link href='/choiceUser'>
          <a><FiArrowLeft size='20' />Voltar para pagina de escolha de perfil</a>
        </Link>

      </div>
    </>
  )
}