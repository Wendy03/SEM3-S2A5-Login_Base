// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const userCheck = require('./user_check')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting static files
app.use(express.static('public'))

// setting routes
app.get('/', (req, res) => {
  res.render('login')
})

app.post('/', (req, res) => {
  const userInput = req.body
  const result = userCheck(userInput)
  let error = 'Username/Password 錯誤'
  if (result === undefined) {
    res.render('login', { error })
  } else {
    let userName = result.firstName
    res.render('home', { userName })
  }

})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})