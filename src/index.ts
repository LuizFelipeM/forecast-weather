import express from 'express'

const app = express()
const port = process.env.PORT ?? 5000

app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile('index.html', {root: __dirname + '/public/'}))
app.listen(port, () => console.log(`Running application in port ${port}`))