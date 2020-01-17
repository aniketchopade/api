// export class Flashcard {
//     id: number;
//     question: string;
//     answer: string;
//     category: string;
//     status: string;
//   }
  

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlashcardsSchema = new Schema({
    question: {type: String, required: true},
    answer: {type: String, required: true},
    category: {type: String, required: true},
    status: {type: String, required: true},
    userid: {type: String, required: true},

});


// Export the model
module.exports = mongoose.model('flashcards', FlashcardsSchema);