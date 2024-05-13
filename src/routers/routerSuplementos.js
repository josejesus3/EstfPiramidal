import express from 'express';
const router = express.Router();
import fs from "fs";

router.use(express.json());


const readDataSuplementos = () => {
    try {
    const data = fs.readFileSync("./src/data/suplementos.json");
    return JSON.parse(data);
    } catch (e) {
        console.log(e)
    }
};


router.get('/get', (req, res) => {
    const data = readDataSuplementos();
    res.json(data)

});

export default router;