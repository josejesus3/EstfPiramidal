import express from 'express';
import fs from "fs";

const app = express();

const PORT= process.env.PORT || 3000;

app.use(express.json());
/*

        Lectura de datos

*/

//OrigenAnimal
const readDataOrigenAnimal = () => {
    try {
    const data = fs.readFileSync("./src/data/origenAnimal.json");
    return JSON.parse(data);
    } catch (e) {
        console.log(e)
    }
};

//Frutas y Verduras

const readDataFrutasVerduras = () => {
    try {
    const data = fs.readFileSync("./src/data/frutasVerduras.json");
    return JSON.parse(data);
    } catch (e) {
        console.log(e)
    }
};

//Granos y Cereales

const readDataGranosCereales = () => {
    try {
    const data = fs.readFileSync("./src/data/granosCereales.json");
    return JSON.parse(data);
    } catch (e) {
        console.log(e)
    }
};

//Legumbres y Frutos Secos

const readDataLegumbresFrutosSecos = () => {
    try {
    const data = fs.readFileSync("./src/data/legumbresFrutosSecos.json");
    return JSON.parse(data);
    } catch (e) {
        console.log(e)
    }
};

//Suplementos

const readDataSuplementos = () => {
    try {
    const data = fs.readFileSync("./src/data/suplementos.json");
    return JSON.parse(data);
    } catch (e) {
        console.log(e)
    }
};


/*

        Escritura

*/


const writeData = (data) => {
    try {
        
        fs.writeFileSync("./src/data/alimentos.json", JSON.stringify(data));

    } catch (error) {
        console.log(error)
    }
};


/*

        Rutas GET

*/

app.get('/', (req, res) => {
res.send("hi")
});


app.get('/alimentos', (req, res) => {
    const data = readData();
    res.json(data)

});

app.get('/origenAnimal', (req, res) => {
    const data = readDataOrigenAnimal();
    res.json(data)

});

app.get('/frutasVerduras', (req, res) => {
    const data = readDataFrutasVerduras();
    res.json(data)

});

app.get('/granosCereales', (req, res) => {
    const data = readDataGranosCereales();
    res.json(data)

});

app.get('/legumbresFrutosSecos', (req, res) => {
    const data = readDataLegumbresFrutosSecos();
    res.json(data)

});

app.get('/suplementos', (req, res) => {
    const data = readDataSuplementos();
    res.json(data)

});








app.listen(PORT,() => {
    console.log('listening on port 3000')
});