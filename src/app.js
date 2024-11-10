const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const routerApi = require('./routes');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Esta es la Api de TicketSys');
});

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});
