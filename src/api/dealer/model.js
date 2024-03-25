const mongoose = require('mongoose');

const dealerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  }
});


dealerSchema.statics.login = async function(email, password) {
  const dealer = await this.findOne({ email });
  if (dealer) {
   if(dealer.password === password){
    throw Error('incorrect password')}
  }
};

const Dealer = mongoose.model('dealer', dealerSchema);

module.exports = Dealer;