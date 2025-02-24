const express = require('express');
const joyasRoutes = require('./routes/joyasRoutes');

const app = express();
const cors = require('cors');
const port = 3000;

app.use(joyasRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(cors());
app.use(express.json());
app.get("/joyas", async (req, res) => {
    try {
        const joyas = await getJoyas();
        res.json(joyas);
    } catch (error) {
        console.error(error.message);
    }
}
);