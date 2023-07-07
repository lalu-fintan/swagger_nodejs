const mongose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongose.connect(process.env.DB_URL);
    console.log(connect.connection.host);
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDb;
