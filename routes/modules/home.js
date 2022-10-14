const express = require('express')
const router = express.Router()

//引用 Todo model
const Todo = require('../../models/todo')
//定義首頁路由
router.get('/', (req, res) => {
  Todo.find() //取出Todo model裡的所有資料
    .lean() //把Mongoose的Model物件轉換成乾淨的Javascript資料陣列
    .sort({ _id: 'asc' }) //desc
    .then(todos => res.render('index', { todos })) //將資料傳給index樣板
    .catch(error => console.log(error)) //錯誤處理
})

//匯出路由模組
module.exports = router