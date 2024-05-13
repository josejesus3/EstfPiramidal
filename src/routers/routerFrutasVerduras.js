import express from 'express';
const router = express.Router();
import fs from "fs";

router.use(express.json());

const readDataFrutasVerduras = () => {
    try {
    const data = fs.readFileSync("./src/data/frutasVerduras.json");
    return JSON.parse(data);
    } catch (e) {
        console.log(e)
    }
};

router.get('/get', (req, res) => {
    const data = readDataFrutasVerduras();
    res.json(data)

});



export default router;