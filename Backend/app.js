// load all modules 
let app = require('express')();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');



var User = require('./router/grocer.router.js');
let Employee = require("./router/emp.router.js");

let testTicket = require("./router/ticket.router.js");
let employeeDB = require("./router/employee.router.js");
let cartDB = require("./router/cart.router.js");
const mongooseDB = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}



// connection to mongodb cloud database online 
const uri = "mongodb+srv://admin:admin@cluster0.lb81w.mongodb.net/grocer-db?retryWrites=true&w=majority";



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(uri, mongooseDB);

mongoose.connection;

app.use("/employee", Employee);
app.use("/user", User);


app.use("/userTest", testTicket);
app.use("/employeedb", employeeDB);
app.use("/userCart", cartDB);


app.listen(9090, () => {
    console.log('Server Running on Port Number : 9090');
})
