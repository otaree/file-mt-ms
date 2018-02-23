const express = require('express');
const multer = require('multer');
const favicon = require('serve-favicon');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));
app.use(favicon(path.join(__dirname, '/..','public', 'img', 'favicon-16x16.png')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/', upload.single('myFile'), (req, res) => {

    res.send({
      "size": req.file.size 
    });
  });


app.listen(port, () => console.log(`Server is up on ${port}`));




