const { User } = require('../models');

const userData = [{
        username: 'Worgen',
        password: 'Azeroth'

    },
    {
        username: 'FrancisBacon',
        password: '21Pilots'
    },
    {
        username: 'Jdogg',
        password: 'CradleOfFilth'
    },
    {
        username: 'ReckitRalph',
        password: 'Whataburger29'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
