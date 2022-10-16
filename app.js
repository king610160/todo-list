const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Port = process.env.PORT || 3000

// 引用路由器
const routes = require('./routes')
require('./config/mongoose')

const app = express()

app.engine('hbs', exphbs({ default:'main', extname: 'hbs'}))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//將request導入路由
app.use(routes)

app.listen(Port, () => {
  console.log(`App is running on http://localhost:${Port}`)
})

