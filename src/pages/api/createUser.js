import connection from '../../database/connection'


export default async function createUser(req, res){
  const {name} = req.body

  await connection('users').insert({
    name
  })

  return res.json(`${name} foi criado com sucesso!`)
}