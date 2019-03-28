var mongoose = require('mongoose');
 
const Schema = mongoose.Schema
 
const BookSchema = new Schema({
  title: String,
  description: String,
  category: String
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
 
const Book = module.exports = mongoose.model('books', BookSchema)