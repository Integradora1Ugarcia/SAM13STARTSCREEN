const { Schema, model } = require('mongoose');

const InternalSchema = new Schema({
    type: {
        type: String,
        required: 'Type can\'t be empty!'
    },
    responsible: {
        type: String,
        required: 'Responsible can\'t be empty!'
    },
    amount: {
        type: Number,
        required: 'Amount can\'t be empty!'
    },
    reason: {
        type: String,
        required: 'Reason can\'t be empty!'
    }
});

module.exports = model('Internal', InternalSchema);