const Plant = require('../models/plant');

const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find()
        res.json(plants)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOnePlant(req, res) {
    try {
        const id = req.params.id
        const plant = await Plant.findById(id)
        if (plant) {
            return res.json(plant)
        }
        return res.status(404).send('plant with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createPlant(req,res) {
    try {
        const plant = await new Plant(req.body)
        await plant.save()
        return res.status(201).json({
            plant
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updatePlant(req,res) {
    try {
        const id = req.params.id
        const plant = await Plant.findByIdAndUpdate(id, req.body, {new: true})
        if (plant) {
            return res.status(200).json(plant)
        }
        throw new Error('Plant not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deletePlant(req,res) {
    try {
        const id = req.params.id
        const plant =  await Plant.findByIdAndDelete(id)
        if (plant) {
            return res.status(200).json(plant)
        }
        throw new Error('Plant not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}



module.exports = {
    getAllPlants,
    getOnePlant,
    createPlant,
    updatePlant,
    deletePlant
}