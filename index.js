const express = require('express');
const joyasRoutes = require('./routes/joyasRoutes');

const app = express();

const port = 3000;

app.use(express.json());

app.use(joyasRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});