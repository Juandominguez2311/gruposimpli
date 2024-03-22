const express = require('express')
const app = express()
const apiRoutes = require('./api/routes')
const DatabaseService = require('./services/DatabaseService')
const bodyParser = require('body-parser').json()

app.use(bodyParser)
app.get('/ping', (req: any, res: any) => res.send('pong'))
app.use('/api', apiRoutes)

const serverReadyLog = () => console.log(`🚀 Server ready at http://localhost:3000/panel`)
DatabaseService.connect()
app.listen(3000, serverReadyLog())