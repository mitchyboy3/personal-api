const user = require('../user.js');

module.exports = {
    getName: (req, res) => {
        res.status(200).send(user.name);
    },
    getLocation: (req, res) => {
        res.status(200).send(user.location);
    },
    getOccupations: (req, res) => {
        res.status(200).send(user.occupations);
    },
    getLatestOcupation: (req, res) => {
        res.status(200).send(user.occupations[user.occupations.length - 1]);
    },
    getHobbies: (req, res) => {
        res.status(200).send(user.hobbies);
    },
    getHobbiesType: (req, res) => {
        let hobbyType = req.params.type;
        res.status(200).send(user.hobbies.filter((hobby)=> hobby.type === hobbyType ));
    },
    getFamily: (req, res) => {
        res.status(200).send(user.family);
    },
     getFamilyGender: (req, res) => {
        let genderType = req.params.gender;
        res.status(200).send(user.family.filter((family)=> family.gender === genderType ));
    },
     getRestaurants: (req, res) => {
        res.status(200).send(user.restaurants);
    },
     getRestaurantsName: (req, res) => {
        let restaurantName = req.params.name;
        res.status(200).send(user.restaurants.filter((restaurant)=> restaurant.name === restaurantName ));
    },
}