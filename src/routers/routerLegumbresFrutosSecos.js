import express from 'express';
const router = express.Router();
import fs from "fs";

router.use(express.json());

const readDataLegumbresFrutosSecos = () => {
    try {
    const data = fs.readFileSync("./src/data/legumbresFrutosSecos.json");
    return JSON.parse(data);
    } catch (e) {
        console.log(e)
    }
};

router.get('/get', (req, res) => {
    const data = readDataLegumbresFrutosSecos();
    res.json(data)

});

export default router;