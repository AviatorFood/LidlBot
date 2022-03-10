const mongoose = require("mongoose")
const fs = require('fs');
const databaseFiles = fs.readdirSync("./src/database").filter(file => file.endsWith(".js"));

module.exports = (client) => {
    client.dbLogin = async () => {
        for (file of databaseFiles) {
            const event = require(`../database/${file}`);
            if (event.once) {
                mongoose.connection.once(event.name, (...args) => event.execute(...args));
            } else {
                mongoose.connection.on(event.name, (...args) => event.execute(...args));
            }
        }
        mongoose.Promise = global.Promise;
        await mongoose.connect(process.env.databaseToken, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    }
}