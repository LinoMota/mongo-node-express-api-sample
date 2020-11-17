import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
    name : String,
    birthDate : Date,
    likes : [String],
    createdAt : {
        type : Date,
        default : new Date()
    }
});

const customer = mongoose.model('Customer', customerSchema);
export default customer;