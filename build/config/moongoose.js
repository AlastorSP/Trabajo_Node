"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = 'mongodb+srv://SantiagoSP:S4nt14g0@electivaetitc.nwpje.mongodb.net/?retryWrites=true&w=majority';
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
