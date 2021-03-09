import connection from '../../database/connection'

export default async function CreateUser(req, res){
  const { name } = req.body

  await connection('users').insert({
    name
  })

  return res.status(204).send()
}