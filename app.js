const express = require('express')
const mongoose = require('mongoose') // 載入 mongoose
const bodyParser = require('body-parser')
const port = 3000
const Todo = require('./models/todo')

const app = express()
const exphbs = require('express-handlebars')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

//資料庫連線設定
db.on('error', () => {
  console.log('mongoose error!')
})

db.once('open', () => {
  console.log('mongoose connected!')
})

app.engine('hbs', exphbs({ default:'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  Todo.find() //取出Todo model裡的所有資料
    .lean() //把Mongoose的Model物件轉換成乾淨的Javascript資料陣列
    .sort({ _id:'asc' }) //desc
    .then(todos => res.render('index', { todos })) //將資料傳給index樣板
    .catch(error => console.log(error)) //錯誤處理
})

app.get('/todos/new', (req,res) => {
  return res.render('new')
})

app.get('/todos/:id', (req,res) => {
  const id = req.params.id
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render('detail', { todo }))
    .catch(error => console.log(error))
})

app.get('/todos/:id/edit', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render('edit', { todo }))
    .catch(error => console.log(error))
})

app.post('/todos', (req,res) => {
  const name = req.body.name   //從req.body拿出表單內容(可能還會做其他操作)
  // return Todo.create({ name }) //存入資料庫
    // .then(() => res.redirect('/'))  //新增完成後導回首頁
    // .catch(error => console.log(error))

  return Todo.create({ name }) //呼叫Todo，直接存入資料庫，不做任何操作
    .then(() => res.redirect('/'))  //新增完成後導回首頁
    .catch(error => console.log(error))
})

app.post('/todos/:id/edit', (req, res) => {
  const id = req.params.id  //用的id
  const { name, isDone } = req.body   //使用者輸入的表單內容,拿取對應參數

  return Todo.findById(id) //呼叫Todo，用id找到對應資料(使用者改id頁面的id去找)
    .then(todo => { //不使用lean是因為還不需要解析資料
      todo.name = name //資料庫裡的name變成使用者輸入的name
      todo.isDone = (isDone ==='on')
      return todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))  //新增完成後導回詳細頁，確認輸入資料
    .catch(error => console.log(error))
})

app.post('/todos/:id/delete', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .then(todo => todo.remove())  //找到對應id才能做remove
    .then(() => res.redirect('/'))  //remove後到根目錄
    .catch(error => console.log(error))
})




app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})

