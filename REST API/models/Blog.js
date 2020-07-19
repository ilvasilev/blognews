const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const blogSchema = new Schema({

    title: {
        type: String,
        required: true,
        maxlength: 20
    },
    
    content: {
        type: String,
        required: true,
        maxlength: 500
    },

    imageUrl: {
        type: String,
        required: true
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Blog', blogSchema);