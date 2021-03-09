import connection from '../../database/connection'

export default async function FindUsers(req, res){

  const users = await connection('users').select('*')

  return res.json(users)
}