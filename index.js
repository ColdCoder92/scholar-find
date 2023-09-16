const express = require('express');
const routers = require('routers/routes');

const app = express();
routers(app);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(3000, () => {
    console.log("Server is up!");
});
