import express from 'express';
import fs from "fs";

const app = express();

const port=3000;

app.use(express.json());

const readData = () => {
    try {
    const data = fs.readFileSync("./src/data/alimentos.json");
    return JSON.parse(data);
    } catch (e) {
        console.log(e)
    }
};

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


app.get('/alimentos', (req, res) => {
    const data = readData();
    res.json(data)

});

app.listen(port,() => {
    console.log('listening on port 3000')
});