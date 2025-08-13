const { error } = require('console')
const jpModel = require('../model/jp_template.model')
// const userModel = require('../model/user.model')
// const { compare } = require('bcrypt')

async function createJPModel(request, response) {
    try {
        const new_data = await jpModel.create(request.body)
        return response.status(202).send({
            error: false,
            message: 'JP Template data created',
            data: new_data
        })
    } catch (error) {
        return response.status(500).send({
            error: true,
            message: 'Erro creating data',
            data: error
        })
    }
}

// async function readJPModel(request, response){

// }

module.exports = {
    createJPModel,
    // readJPModel
}