const express = require('express');
 require('dotenv').config();
 const cors = require('cors');
 const app = express();
 const mongoose = require('mongoose');
 
 const PORT = process.env.PORT;
 const MONGO_DB_URL = process.env.MONGO_DB_URL;
 mongoose.connect(`${MONGO_DB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true });
 
 app.use(cors());
 app.use(express.json());


const {
    getDrinkApi,
    addDrink,
    getDrink,
    deleteDrink,
    updateDrink
  } = require('./controller/drink.controller'); 

  
app.get('/allDrinks', getDrinkApi); 
app.post('/addDrink', addDrink);
app.get('/getDrink', getDrink); 

app.delete('/delete/:id', deleteDrink)
app.put('/update/:id', updateDrink)

app.listen(PORT, ()=>console.log(`Listen to PORT ${PORT}`));