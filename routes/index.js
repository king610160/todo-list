const express = require('express')
const router = express.Router()
//引入 home 模組程式碼
const home = require('./modules/home')
const todos = require('./modules/todos')
// 將網址結構符合 / 字串的request導向home模組
router.use('/', home)
router.use('/todos', todos)


module.exports = router