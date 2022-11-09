const express = require('express');
const path = require('path');

const app = express();

app.get('/test', (req, res) => {
    res.send('Teste ....');
});

app.get('/api/v1/user', (req, res) => {
    res.json({
        success: true,
        message: 'User fetched',
        user: {
            fullname: 'Marcelo Pereira',
            email: 'marcelo@gmail.com',
            phone: '+551699999999',
        },
    });
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 8080;
app.listen(port, () => console.log(`App listening port ${port}`));