import connection from '../../database/connection'

export default async function deletePurchase(req, res) {

  const userId = req.headers.authorization
  const { id } = req.params

  const purchase = await connection('purchases').where('id', id).first()

  if(userId =! purchase.userId){
    return res.status(401).json({error: 'Solicitação não permitida!'})
  }


  await connection('purchases').where('id', id).del()

  return res.status(204).send()
}