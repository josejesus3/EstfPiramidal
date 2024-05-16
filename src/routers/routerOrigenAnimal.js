import express from 'express';
const router = express.Router();
import fs from "fs";

router.use(express.json());

const readDataOrigenAnimal = () => {
    try {
    const data = fs.readFileSync("./src/data/origenAnimal.json");
    return JSON.parse(data);
    } catch (e) {
        console.log(e)
    }
};



router.get('/get', (req, res) => {
    const data = readDataOrigenAnimal();
    res.json(data)


    //
    //
    //
    //
    //
    //
    //
    

    // Método POST para agregar un nuevo alimento en cualquier categoría de origen animal
router.post('/add/:categoria', (req, res) => {
    try {
        const categoria = req.params.categoria;
        const nuevoAlimento = req.body;
        const data = readDataOrigenAnimal();
        
        if (!data.OrigenAnimal[categoria]) {
            res.status(400).json({ message: "La categoría especificada no existe" });
            return;
        }
        
        data.OrigenAnimal[categoria][nuevoAlimento.nombre] = nuevoAlimento;
        fs.writeFileSync(origenAnimalFilePath, JSON.stringify(data));
        res.status(200).json({ message: "Alimento agregado correctamente", nuevoAlimento });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al agregar el alimento" });
    }
});

// Método PUT para actualizar un alimento existente en cualquier categoría de origen animal
router.put('/update/:categoria/:nombre', (req, res) => {
    try {
        const categoria = req.params.categoria;
        const nombreAlimento = req.params.nombre;
        const data = readDataOrigenAnimal();
        
        if (!data.OrigenAnimal[categoria]) {
            res.status(400).json({ message: "La categoría especificada no existe" });
            return;
        }
        
        data.OrigenAnimal[categoria][nombreAlimento] = req.body;
        fs.writeFileSync(origenAnimalFilePath, JSON.stringify(data));
        res.status(200).json({ message: "Alimento actualizado correctamente", nombreAlimento });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar el alimento" });
    }
});

// Método DELETE para eliminar un alimento existente en cualquier categoría de origen animal
router.delete('/delete/:categoria/:nombre', (req, res) => {
    try {
        const categoria = req.params.categoria;
        const nombreAlimento = req.params.nombre;
        const data = readDataOrigenAnimal();
        
        if (!data.OrigenAnimal[categoria]) {
            res.status(400).json({ message: "La categoría especificada no existe" });
            return;
        }
        
        delete data.OrigenAnimal[categoria][nombreAlimento];
        fs.writeFileSync(origenAnimalFilePath, JSON.stringify(data));
        res.status(200).json({ message: "Alimento eliminado correctamente", nombreAlimento });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al eliminar el alimento" });
    }
});


});
export default router;