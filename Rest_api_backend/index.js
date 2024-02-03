const express = require('express');
const cors = require('cors');
const http = require('http');
const {db} = require('./config/db');
const routes = require('./routes/index');
const PORT =8081;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/',routes);

const server = http.createServer(app);

db.connect((err) => {
    if (err) {
        console.error('Error occured'+ err);
    } else {
        console.log('Connection is successful to MySQL');
    }
});
app.get('/', (req, res) => {
    res.send("You are at the home page ");
});
server.listen(PORT,()=>{
    console.log("listning on to the port " + PORT);
})