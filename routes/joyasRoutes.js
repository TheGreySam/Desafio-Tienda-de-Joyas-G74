const express = require('express');

const { getJoyas, getJoyasFiltro } = require('../controllers/joyasController');

const router = express.Router();

router.get('/joyas', async (req, res) => {
    try {
        const { page = 1, limit = 10, order = 'ASC' } = req.query;
        const joyas = await getJoyas(page, limit, order);
        res.json(joyas);
    } catch (error) {
        console.error(error.message);
    }
}
);

router.get('/joyas/filtro', async (req, res) => {
    try {
        const { precio_max, precio_min, categoria, metal } = req.query;
        const joyas = await getJoyasFiltro(precio_max, precio_min, categoria, metal);
        res.json(joyas);
    } catch (error) {
        console.error(error.message);
    }
}   
);

module.exports = router;