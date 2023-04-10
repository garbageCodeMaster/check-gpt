const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log(req)
    res.send('')
})

app.listen(port, () => {
    console.log(`Server run on port ${port}`)
})
