const mongoose = require('mongoose') // 載入 mongoose
const Todo = require('../todo') //載入 todo model

mongoose.connect('mongodb+srv://king610160:Ji32k7au4a83@cluster0.79iam4l.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

const db = mongoose.connection


db.on('error', () => {
  console.log('mongoose error!')
})

db.once('open', () => {
  console.log('mongoose connected!')
  for (let i = 0; i < 10; i++) {
    Todo.create({ name: `name-${i}` })
  }
  console.log('done')
})

