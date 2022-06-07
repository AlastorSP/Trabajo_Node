import mongoose from "mongoose";


const MONGO_URI = 'mongodb+srv://SantiagoSP:S4nt14g0@electivaetitc.nwpje.mongodb.net/?retryWrites=true&w=majority'
mongoose.set("useFindAndModify", false)
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})