const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser')

const fs = require('fs')

const app2 = express()
app2.use(cors())
app2.use(body_parser.json())

let EXPENSES = []

app2.get('/', (req, res) => {
    res.json(EXPENSES)
})

app2.post('/new-expense', (req, res) => {
    const new_expense = req.body 
    EXPENSES.unshift(new_expense)
    fs.writeFileSync('./data/expenses.json', JSON.stringify(EXPENSES))
    res.json(EXPENSES)
})

app2.listen(5000, () => {
    console.log('Server is listening at http://127.0.0.1:5000')
    const raw_data_string = fs.readFileSync('./data/expenses.json')
    EXPENSES = JSON.parse(raw_data_string)
})