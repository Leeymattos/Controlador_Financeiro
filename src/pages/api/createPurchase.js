import connection from '../../database/connection'

export default async function CreatePurchase(req, res){
  const { purchaseName, date, value, payment } = req.body

  const userId = req.headers.authorization

  await connection('purchases').insert({
    purchaseName,
    date,
    value,
    payment,
    userId
  })

  return res.status(204).send()
}