const { validationResult } = require('express-validator')

const controller = {
    registro: (req, res) => {
        res.render('registro');
    },
    processUser: (req, res) => {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            const {nombre, color, email, edad} = req.body

            req.session.bgColor = color
            res.locals.bgColor = color
            req.session.userName = nombre
            if (req.body.recordarme !== undefined) {
                res.cookie('color', color, {maxAge: 60*1000})
            }
            res.render('registro', {nombre, color, email, edad})
        } else {
            
            res.render('registro', {errors: errors.mapped(), old: req.body})
        }
    },
    user: (req, res) => {
        res.locals.bgColor = req.session.bgColor
        res.render('user', {userName: req.session.userName})
    },
    destroy: (req, res) => {
        req.session.destroy()
        res.cookie('color', null, {maxAge: -1})
        res.redirect('/')
    }
}

module.exports = controller;