// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path'
import fs from 'fs'

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      let data = getData()
      res.status(200).json(data)
      break
    case 'POST':
      saveData(req.body)
      res.status(200).json('OK')
      break
    default:
  }
  res.status(200).json({ name: 'John Doe' })
}

const getData = () => {
  let data = require('../../config/data.json')
  return data
}

const saveData = (email) => {
  let data = getData() || []
  console.log('DATA', data)
  data.push({ email, date: new Date() })
  fs.writeFileSync(path.join('config', 'data.json'), JSON.stringify(data))
}
