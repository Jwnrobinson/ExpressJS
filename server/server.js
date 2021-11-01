const express = require ('express');
const path = require ('path');
let app = express('path');

// app.get('/', (req, res) => {
//     // res.send("Hello from the web server side...");
//     res.sendFile(path.join(__dirname, '..public/index.html'));
// });

// app.get('/css/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '..public/css/styles.css'));
// });
app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.use(express.static(path.join(__dirname, '..public')));
app.use('/order/:id', (req, res) => {
    let name = req.params.id;
    let email = req.query.email;
    res.send('Your name is ${name} and your email address is ${email}');
});

app.listen(3000);