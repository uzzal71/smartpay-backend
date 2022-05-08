import mongoose from "mongoose";

const log = (msg) => console.log(msg);

const uri = "mongodb://localhost:27017/smartPay";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectWithDb = () => {
    mongoose.connect(uri, options, (err, db) => {
        if (err) {
            console.error(err);
        }
        else log("database connection established");
    });
};


export default connectWithDb;