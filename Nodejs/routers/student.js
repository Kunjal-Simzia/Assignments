const express = require('express')
const router = express.Router()
const Student = require('../models/student')

router.get('/', async (req, res) => {
    try {
        const stud = await Student.find()
        res.json(stud)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.post('/', async (req, res) => {
    const stud = new Student({
        name: req.body.name,
        age: req.body.age
    });
    console.log("here" + stud)
    try {
        const s1 = await stud.save()
        res.json(s1)
    }
    catch (err) { res.send(err) }
})

router.get('/:id', async (req, res) => {
    try {
        const stud = await Student.findById(req.params.id)
        res.json(stud)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const stud=await Student.findById(req.params.id)
        stud.age=req.body.age
        const s1=await stud.save()
        res.json(s1)
     } catch (err) {
        res.send('Error' + err)
    }
})

module.exports = router