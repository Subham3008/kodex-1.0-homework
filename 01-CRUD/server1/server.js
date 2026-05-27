const app = require("./src/app");
const connectDB = require("./src/config/db");

const port = process.env.PORT || 4000

//connect to Database
connectDB()

//server start
app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
  
})