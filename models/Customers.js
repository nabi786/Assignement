// models/User.js
import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    username: { type: String, required: true },
    customer_name: {
        type: String,
        require: true
    },
    email: { type: String, required: true },
    image: { type: String, required: true }
}, { timestamps: true });


const customer = mongoose.models.customers || mongoose.model('customers', CustomerSchema);

export {customer}
