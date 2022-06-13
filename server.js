const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation' : 'Plaistow, London, England'
    },
    'chancetherapper': {
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois, U.S.'
    },
    'unknown': {
        'age': 0,
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    },
    'dylan': {
        'age': 42,
        'birthName': 'Dylan Dilinjah',
        'birthLocation': 'Brooklyn, New York, U.S.'
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res)=>{
    const rapperName = req.params.name.toLocaleLowerCase().replace(/\s/g,'')
    rappers[rapperName] ? res.json(rappers[rapperName]) : res.json(rappers['unknown'])
})

app.listen(PORT, () =>{
    console.log(`The server is now running on PORT ${PORT}; you better go catch it!!`)
})