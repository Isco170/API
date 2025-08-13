const express = require('express')

const jpRoutes = require('./route/jp_template.route')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const sequelize = require('./database')

app.get('/', (request, response) => {
    return response.send('Bem-vindo')
})

app.use('/jptamplate', jpRoutes)

const PORT = process.env.PORT || 443

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    sequelize.authenticate().then(async () => {
        console.log("Conetando a base de dados")
        await sequelize.sync({alter: true})
    })
    .catch((e) => {
        console.log(e)
    })
})