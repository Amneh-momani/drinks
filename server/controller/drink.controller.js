const axios = require('axios');

const drinkData = require('../model/drinksSchema');

const getDrinkApi = (req, res) => {
    const drinks = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
    axios.get(drinks).then(drink => res.send(drink.data))
}

const addDrink = (req, res) => {
    const { strDrink, strDrinkThumb, idDrink } = req.body;
    const newDrink = new drinkData({
        strDrink: strDrink,
        strDrinkThumb: strDrinkThumb,
        idDrink: idDrink,
    });
    newDrink.save();
}


const getDrink = (req, res) => {
    drinkData.find({}, (error, data) => {
        if (error) {
            res.send(error)
        } else { res.send(data) }
    })
}


const deleteDrink = (req, res) => {
    const { id } = req.params;
    drinkData.deleteOne({ _id: id }, (error, data) => { })
    drinkData.find({}, (error, data) => res.send(data))
}

const updateDrink = (req, res) => {
    const { id } = req.params;
    const { strDrink, strDrinkThumb, idDrink } = req.body;
    drinkData.findByIdAndUpdate(
        { _id: id }, {
        strDrink: strDrink,
        strDrinkThumb: strDrinkThumb,
        idDrink: idDrink
    }, { new: true },
        (err, data) => res.send(data)
    )
}



module.exports = {
    getDrinkApi,
    addDrink,
    getDrink,
    deleteDrink,
    updateDrink
};


