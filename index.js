const express = require('express')
const app = express()
const path = require('path')
const calc = require('./lib/calc')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/calculadora', (req, res) => {
    const { vp, tx, pz } = req.query
    if (vp && tx && pz) {
        const calculadora = calc.calc(vp, tx, pz)
        const juros = calc.juros(calculadora, vp)
        res.render('calculadora', {
            error: false,
            vp, tx, pz, calculadora, juros
        })
    }else{
        res.render('calculadora', {
            error: 'Valores Invalidos'
        })
    }
})

app.listen(3000, err => {
    if (err) {
        console.log(err)
    } else {
        console.log("Conversor esta online")
    }
})