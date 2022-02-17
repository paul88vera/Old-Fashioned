const seedLibrary = require("./library-seeds");
const seedLibrary = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("=================");
    await seedLibrary();
    console.log("=================");

    await seedLibrary();
    console.log("==================");

    process.exit(0);
};

seedAll();
