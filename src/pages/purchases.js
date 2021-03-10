import { Form, Formik } from "formik"
import { useContext, useEffect, useRef, useState } from "react"
import Link from 'next/link'
import { FiArrowLeft, FiTrash } from 'react-icons/fi'

import styles from '../styles/pages/purchase.module.css'

import { ModalContext } from "../contexts/ModalContext"
import { useRouter } from "next/router"
import axios from "axios"


export default function Purchases() {

  const router = useRouter()

  const userId = router.query.userId
  
  const { openUnsuccessfulModal } = useContext(ModalContext)

  const [purchases, setPurchases] = useState([])
  const [total, setTotal] = useState([])

  const firstInput = useRef(null)


  useEffect(() => {

     axios.get('/api/findPurchases', {
       headers: {
         authorization: userId
       }
     }).then(response => {
      setPurchases(response.data)
     
    })

    axios.get('/api/findPurchaseTotal', {
      headers: {
        authorization: userId
      }
    }).then(response=>{
      setTotal(response.data)
    })

  }, [userId, purchases])

  async function handleSubmit(values, { resetForm }) {

    const data = {
      purchaseName: values.purchaseName,
      date: values.date,
      value: values.value,
      payment: values.payment,
    }

    try {
      await axios.post('/api/createPurchase', data,{
        headers:{
          authorization: userId
        }
      })
      resetForm({})
      firstInput.current.focus()

    } catch (err) {
      openUnsuccessfulModal()
    }
  }

  async function handleDelete(id){
    console.log(userId)
    await axios.delete('api/deletePurchase', {
      headers:{
        authorization: id
      }
    })
    
  }

  return (

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
          {({
            values,
            handleChange
          }) => (
            <Form>
              <div>
                <h1> Insira os dados da sua compra: </h1>
                <input type="text" ref={firstInput} placeholder='Compra' name='purchaseName' onChange={handleChange} value={values.purchaseName} autoFocus />
                <input type="text" placeholder='Data' name='date' onChange={handleChange} value={values.date} />
                <input type="text" placeholder='Valor' name='value' onChange={handleChange} value={values.value} />
                <input type="text" placeholder='Forma de pagamento' name='payment' onChange={handleChange} value={values.payment} />

                <button type='submit'>Cadastrar</button>
              </div>

            </Form>
          )}

        </Formik>

        <div>

          <div>
            <ol>
              {purchases.map(purchase => (
                <li key={purchase.id}>
                  <div>
                    {purchase.purchaseName}; {purchase.date}; {purchase.payment}; {purchase.value}


                    <button type='button' onClick={() => handleDelete(purchase.id)}><FiTrash /></button>


                  </div>
                </li>

              ))}

            </ol>
            <div className={styles.total}>
              <h1>Total: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                  .format(total)}</h1>
                 
            </div>
          </div>
        </div>

        <Link href='/choiceUser'>
          <a><FiArrowLeft size='20' />Voltar para pagina de escolha de perfil</a>
        </Link>

      </div>
   
  )
}