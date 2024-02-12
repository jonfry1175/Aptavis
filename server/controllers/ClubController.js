const { Clubs } = require('../models')

class ClubController {
    static async getAllClub(req, res) {
        try {
            const result = await Clubs.findAll()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async create(req, res) {
        try {
            const { id, city } = req.body
            const result = await Clubs.create({
                id, city
            })
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id
            const result = await Clubs.destroy({
                where: { id }
            })
            result > 0 ? res.status(200).json({
                message: `succes delete club id ${id}`
            }) : res.status(404).json({
                message: `club id ${id} is not defined`
            })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async getByCity(req, res) {
        try {
            const city = req.params.city
            const result = await Clubs.findOne({
                where: {city}
            })
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = ClubController