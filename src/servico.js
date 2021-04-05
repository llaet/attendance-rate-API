const express = require('express')
const cors = require('cors');
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.listen(process.env.PORT || 3030, () => {
    console.log(`up!`)
})

var contador = {
    sim: 0,
    nao: 0
}

app.post('/contador/:operacao', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let parametro = req.params.operacao;
    switch(parametro) {
        case 'sim':
            contador.sim++;
            break;
        case 'nao':
            contador.nao++;
    }
    res.send(contador);
});

app.get('/contador', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(contador);
})