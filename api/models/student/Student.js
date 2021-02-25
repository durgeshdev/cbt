'use strict';

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

let tableSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    marks: {
        type: Number
    },
    subjects: {
        type: Array
    },
    percentage: {
        type: Number
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

tableSchema.plugin(autoIncrement.plugin, {
    model: 'Student',
    field: '_id',
    startAt: 1000,
    incrementBy: 1
});
// tableSchema.index({ _id: 1 }, { background: true });
mongoose.model('Student', tableSchema);
