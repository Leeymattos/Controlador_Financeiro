import connection from '../../database/connection'

export default async function create(req, res){
  const {name} = req.body

  await connection('users').insert({
    name
  })

  res.json(`${name} foi criado com sucesso!`)
}