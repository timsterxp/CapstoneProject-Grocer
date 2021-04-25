//Importing modules
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");


//Database url
let url = "mongodb://localhost:27017/meanstack";


//middleware enabling data from post method.
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());   // enable cors to communicate wiht the frontend


//Database connection without warning
const mongooseDbOption ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url,mongooseDbOption);  // ready to connect

//Connect the data
mongoose.connect;

//link to router module
let Employee = require("./router/emp.router.js");

//Middleware
app.use("/employee",Employee);

app.listen(9090,()=>console.log("Server running on port number 9090"));