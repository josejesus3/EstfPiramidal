import express from 'express';
import fs from "fs";
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';


const app = express();

const PORT= process.env.PORT || 3000;

app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('routers', join(__dirname, 'routers'))
app.use(express.static(join(__dirname, 'routers')));
//  Enrutadores

import routeFrutasVerduras  from './routers/routerFrutasVerduras.js';
import routeGranosCereales  from './routers/routerGranosCereales.js';
import routeLegumbresFrutosCecos from './routers/routerLegumbresFrutosSecos.js';
import routeOrigenAnimal from './routers/routerOrigenAnimal.js';
import routeSuplementos from './routers/routerSuplementos.js';

app.use('/FrutasVerduras', routeFrutasVerduras);
app.use('/GranosCereales', routeGranosCereales);
app.use('/LegumbresFrutosSecos', routeLegumbresFrutosCecos);
app.use('/OrigenAnimal', routeOrigenAnimal);
app.use('/Suplementos', routeSuplementos);


const writeData = (data) => {
    try {
        
        fs.writeFileSync("./src/data/alimentos.json", JSON.stringify(data));

    } catch (error) {
        console.log(error)
    }
};


app.get('/', (req, res) => {
res.send("hi")
});




app.listen(PORT,() => {
    console.log('listening on port 3000')
});
/*

app.get('/alimentos', (req, res) => {
    const data = readData();
    res.json(data)

});


app.get('/origenAnimal/:id', (req, res) => {
    const data = readDataOrigenAnimal();
    const id = parseInt(req.params.id);
    const alimento = data.origenAnimal.find((alimento) => alimento.id === id);
    res.json(alimento)
});


*/