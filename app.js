const express = require('express')
const app = express()
const PORT = process.env.PORT || 5050

// const router = require('./routes/router')


app.listen(PORT, () => console.log(`This is the way to the delicious wine. It is running at http://localhost${PORT}`)) 