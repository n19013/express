const express = require('express')
const app = express()
const post = 8081

app.get('/', (req, res, next) => {
    res.send('Hello')
})
app.listen(post)
