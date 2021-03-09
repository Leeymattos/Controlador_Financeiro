import connection from '../../database/connection'

export default async function FindPurchaseTotal(req, res){

 const id = req.headers.authorization

  await connection('purchases').where('id', id).del()
  
  return res.status(204).send()
}