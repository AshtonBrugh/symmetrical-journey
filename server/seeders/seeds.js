const faker = require('faker')
const { db } = require('../config/connection');
const { User } = require('../models');

const seed = async () => {
    try {
        await db.sync({ force: true })

        let users = [];

        for (let i = 0; i < 50; i++) {
            const name = faker.name.firstName()
            let newUser = {
                username: faker.internet.userName(),
                email: faker.internet.email(name).toLowerCase(),
                password: faker.internet.password()
            }

            users.push(newUser)
        };

        users.forEach(async (user) => {
            await User.create(user);
        })
     } catch(err) {
         console.log(err);
     }

 };