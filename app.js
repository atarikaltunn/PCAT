const express = require('express');

const app = express();

app.get('/', (req,res) => {
    const Photo = {
        id: 1,
        name: "Photo name",
        description: "Photo description"
    }
    res.send(Photo);
})

const port = 3000;
app.listen(port , () => {
    console.log(`Sunucu ${port} portunda başlatıldı...`)
})