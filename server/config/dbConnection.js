const mongoose = require('mongoose');
const uri = "mongodb+srv://ejqlportfoliolanding:LpdzKSX7Dv4GrbRx@ejql-portfolio-landing.yn0lbpw.mongodb.net/ejql-portfolio-landing?retryWrites=true&w=majority";


// Connects to DB
const dbConnect = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = dbConnect;