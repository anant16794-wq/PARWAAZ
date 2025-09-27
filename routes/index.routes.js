const express = require('express')
const router = express.Router()

router.get('/home', (req,res) => {
    res.render('home')
})

router.get('/instructions', (req,res) => {
    res.render('instructions')
})

router.get('/aboutus', (req,res) => {
    res.render('aboutus')
})

router.get('/colleges', (req,res) => {
    res.render('colleges')
})

router.get('/faq', (req,res) => {
    res.render('faq')
})

router.get('/schlorship', (req,res) => {
    res.render('schlorship')
})





module.exports = router