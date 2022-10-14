const Todo = require('../todo') //載入 todo model
const db = require('../../config/mongoose')

//一樣的全刪掉，不同的全保留
db.once('open', () => {
  for (let i = 0; i < 10; i++) {
    Todo.create({ name: `name-${i}` })
  }
  console.log('done')
})

