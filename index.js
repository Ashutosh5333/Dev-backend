const connectDB = require("./config/db");
const app = require("./app");

const PORT = process.env.PORT || 8000;



app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Mongo db Connected");
    console.log(`listening on 8000 port`);
  } catch (error) {
    console.log("getting Error while Connect mongo db");
  }
});
