// load all modules 
let app = require('express')();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');



var User = require('./router/grocer.router.js');
let Employee = require("./router/emp.router.js");
let Admin = require("./router/admin.router.js");
let Requests = require("./router/viewRequest.router.js");
let Product = require("./router/product.router.js");
let testTicket = require("./router/ticket.router.js");
let cartDB = require("./router/cart.router.js");
const mongooseDB = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

let order = require("./router/order.router.js");
let funds = require("./router/funds.router.js");
let users = require("./router/user.router.js");

// connection to mongodb cloud database online 
const uri = "mongodb+srv://admin:admin@cluster0.lb81w.mongodb.net/grocer-db?retryWrites=true&w=majority";



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(uri, mongooseDB);

mongoose.connection;

app.use("/employee", Employee);
app.use("/user", User);
app.use("/admin", Admin);
app.use("/request", Requests);
app.use("/product", Product);

app.use("/userTest", testTicket);
app.use("/userCart", cartDB);
app.use("/order", order);
app.use("/funds", funds);
app.use("/Users", users);

app.listen(9090, () => {
    console.log('Server Running on Port Number : 9090');
})