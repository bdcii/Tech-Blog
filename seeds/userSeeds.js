 
const { User } = require('../models');

const userData =
 [
  {
    "username": "michaelangelo",
    "email": "mikeytmnt@gmail.com",
    "password": "p1zzat1m3"
  },
  {
    "username": "donatello",
    "email": "donnytmnt@gmail.com",
    "password": "turtlepower"
  },
  {
    "username": "raphael",
    "email": "ralphtmnt@gmail.com",
    "password": "cowabunga1234"
  },
  {
    "username": "leonardo",
    "email": "leotmnt@gmail.com",
    "password": "password1234"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;