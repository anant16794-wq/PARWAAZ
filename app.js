const express = require('express')
const app = express() 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));



const quizRouter = require('./routes/quiz.routes')
app.use ('/', quizRouter)

app.set('view engine','ejs')



app.listen(3000, () => {
    console.log('server is running on port 3000')
})