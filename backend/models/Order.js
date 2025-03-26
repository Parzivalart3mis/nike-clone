const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number }
        }
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true },
    orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
