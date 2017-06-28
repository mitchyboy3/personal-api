var user = {
  name: 'Mitch',
  location: 'DevMountain',
  occupations: ['inside-sales', 'deliver-man', 'iventory lead', 'direct-sales', 'coder'],
  hobbies: [
        {
        name: 'baseball',
        type: 'sport'
        },
        {
        name: 'card games',
        type: 'entertainment'
        },
        {
        name: 'movies',
        type: 'entertainment'
        }
  ],
  family: [
        {
        name: 'Bailey',
        relation: 'wife',
        gender: 'female'
        },
        {
        name: 'Mabel',
        relation: 'dog',
        gender: 'female'
        },{
        name: 'Jerry',
        relation: 'father',
        gender: 'male'
        }
  ],
  restaurants: [
    {
    name: 'Burger\'s Supreme',
    type: 'american',
    rating: 4.4
    },
    {
    name: 'Little Ceasars',
    type: 'pizza',
    rating: 3.5
    },
    {
    name: 'Guru Cafe',
    type: 'american',
    rating: 5.0
    }
  ]
};

module.exports = user;