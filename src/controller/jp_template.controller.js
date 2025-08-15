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

async function deleteJPModel(request, response) {
    try {
        const { id_code } = request.body;

        if (!id)
            return response.status(400).send({
                error: true,
                message: 'Sem id',
                data: null
            })

        try {
            await jpModel.destroy({ where: { id_code: id_code}})
            return response.status(200).send({
                error: false,
                message: 'Data deleted',
                data: null
            })
        } catch (error) {
            return response.status(400).send({
                error: true,
                message: 'Falha ao deletar JP',
                data: error
            })
        }
    } catch (error) {
        return response.status(400).send({
            error: true,
            message: 'Falha ao deletar JP',
            data: error
        })
    }
}


module.exports = {
    createJPModel,
    deleteJPModel
}