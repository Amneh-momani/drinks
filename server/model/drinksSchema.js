const mongoose = require('mongoose');

const drinkk=new mongoose.Schema({
    strDrink:{ type: String },strDrinkThumb:{ type: String },idDrink:{ type: String }
});

module.exports=mongoose.model("drink",drinkk);

