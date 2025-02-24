const pool = require("../config/db");

// crear ruta get para obtener todas las joyas y  limitar la cantidad de joyas a mostrar, definir pagina y ordenar segun parametros
const getJoyas = async (req, res) => {
    try {
        const { page = 1, limit = 10, order = "ASC" } = req.query;
        const joyas = await pool.query(
            "SELECT * FROM inventario"
            // `SELECT * FROM joyas ORDER BY id ${order} LIMIT ${limit} OFFSET ${(page - 1) * limit}`
        );
        res.json(joyas.rows);
    } catch (error) {
        console.error(error.message);
    }
};

// crear ruta get para recibir los siguientes parametros: precio_max, precio_min, categoria y metal
const getJoyasFiltro = async (req, res) => {
    try {
        const { precio_max, precio_min, categoria, metal } = req.query;
        const joyas = await pool.query(
            `SELECT * FROM joyas WHERE precio >= ${precio_min} AND precio <= ${precio_max} AND categoria = '${categoria}' AND metal = '${metal}'`
        );
        res.json(joyas.rows);
    } catch (error) {
        console.error(error.message);
    }
};

module.exports = { getJoyas, getJoyasFiltro };