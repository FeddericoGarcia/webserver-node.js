const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {

    res.send('Hello World!')

})

app.get('*', (req, res) => {

    res.send(`<h2> 404 | PAGE NOT FOUND </h2>`)

})


app.listen(port, () =>{
    console.log(`Aplicación corriendo en el puerto http://localhost:${port}`)
});