//  Add your code here
const { Schema, model}= require('mongoose');


const celebritySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true,

  },
  catchPhrase: {
    type: String,
  }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;


module.exports = model('celebrity', celebritySchema);