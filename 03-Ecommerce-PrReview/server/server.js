const app = require("./src/app")
const connectDB = require("./src/config/db")


const port = process.env.PORT || 4000

//---Call DB function to start DB->>
connectDB()

//-----Start server---->>
app.listen(port, () => [
  console.log(`Server is running on port ${port}`)
])