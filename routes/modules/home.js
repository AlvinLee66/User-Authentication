const express = require('express')
const router = express.Router()

const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const checkEmail = users.map(users => users.email).indexOf(email)

  // email 是否存在? 不存在，首頁顯示警告提示；存在返回 true
  const emailExist = checkEmail === -1 ? res.render('index', { email }) : true

  if (emailExist) { // 如果 email 存在
    // 確認 password 正不正確 ? 正確，顯示 Welcome back 畫面；不正確，首頁顯示警告提示
    password === users[checkEmail].password ?
      res.render('success', { firstName: users[checkEmail].firstName }) : res.render('index', { password, email })
  }
})

module.exports = router