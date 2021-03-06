import connection from '../../database/connection'

export default async function CreatePurchase(req, res){

  const userId = req.headers.authorization

  const purchases = await connection('purchases').where('userId', userId).select('*')
  
  return res.json(purchases)
}