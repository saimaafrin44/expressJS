const express = require('express')
const app = express()
const port = 3000
const path = require('path');

const members = [
  {
  id:1,
  name:'saima'
  },

  {
    id:2,
    name:'saima2'
  }
]


app.get('/', function(req, res) {
  res.send('Hello World ji!') 
})

app.use(express.static(path.join(__dirname, 'public')));

app.post('/', function(req, res){
    res.send('got a post request')

})


app.put('/user', function(req, res){
    res.send('got a put request at /user')
})
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })

  app.use(express.static('public'))
  
  
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})