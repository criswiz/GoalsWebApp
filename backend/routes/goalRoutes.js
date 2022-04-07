const express = require('express')
const router = express.Router()

/*Get goals endpoint */
router.get('/', (req, res) => {
    res.status(200).json({message: 'Get Goal'})
})

router.post('/', (req, res) => {
    // if(!req.body.text){
    //     res.status('404')
    // }
    res.status(200).json({message: 'set Goal'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})


module.exports = router