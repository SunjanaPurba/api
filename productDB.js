require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const Food = require("./models/food")

const ProductJson = require("./products.json");
const FoodJson = require("./foods.json");

const start = async () => {
    try {
     await connectDB(process.env.MONGODB_URL);
     await Product.deleteMany();
     await Product.create(ProductJson);
     await Food.deleteMany();
     await Food.create(FoodJson);
     console.log("success");
    }catch (error) {
        console.log(error); 
    }
};

start();