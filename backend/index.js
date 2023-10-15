const express = require("express");
const app = express();
const port = 3001;

const products = require("./routes/productRoutes");
const restaurants = require("./routes/restaurantRoutes");

app.use(express.json()); //used for parsing so that always the data return in json
app.use("/api", products);
app.use("/api",restaurants)
app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
