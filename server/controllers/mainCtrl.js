const user = require('../user.js');

module.exports = {

    getUser: (req, res) => {
        res.status(200).json(user);
    },

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

    

    changeName: (req,res) => {
        let newName = req.body.name || user.name;
        user.name = newName;
        res.status(200).send(`Name has been updated to ${user.name} (new name must be truthy).`)
    },

    changeLocation: (req,res) => {
        let newLocation = req.body.location || user.location;
        user.location = newLocation;
        res.status(200).send(`Location has been updated to ${user.location} (new location must be truthy).`)
    },

    addHobby: (req, res) => {
        if (req.body.name && req.body.type){
            let hobbyName = req.body.name;
            let hobbyType = req.body.type;
            user.hobbies.push({name: hobbyName, type: hobbyType })
            res.status(200).send(`You have successfully added the hobby ${hobbyName}.`)
        } 
        else { res.status(400).send('New hobby must have a name and type.') } 
    },

    addOccupation: (req, res) => {
        if (req.body.occupation){
            let occupation = req.body.occupation;
            user.occupations.push(occupation)
            res.status(200).send(`You have successfully added the occupation ${occupation}.`)
        } 
        else { res.status(400).send('Please enter a occupation title.') } 
    },

    addRestaurant: (req, res) => {
        if (req.body.name && req.body.type && req.body.rating){
            let restaurant = req.body.name;
            let type = req.body.type;
            let rating = req.body.rating;
            user.restaurants.push({name: restaurant, type: type, rating: rating})
            res.status(200).send(`You have successfully added the restaurant ${restaurant}.`)
        } 
        else { res.status(400).send('New restaurant must have a name, type, and rating.') } 
    },

    addFamily: (req, res) => {
        if (req.body.name && req.body.gender && req.body.relation){
            let name = req.body.name;
            let gender = req.body.gender;
            let relation = req.body.relation;
            user.family.push({name: name, relation: relation, gender: gender})
            res.status(200).send(`You have successfully added the family member ${name}.`)
        } 
        else { res.status(400).send('New family member must have a name, gender, and relation.') } 
    }

}