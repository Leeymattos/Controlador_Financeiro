import connection from '../../database/connection'

export default async function FindPurchaseTotal(req, res){

  let total = 0

  const userId = req.headers.authorization

  const purchases = await connection('purchases').where('userId', userId).select('*')

  purchases.forEach(purchase => {
    total+= Number(purchase.value)
  });
  
  return res.json(total)
}