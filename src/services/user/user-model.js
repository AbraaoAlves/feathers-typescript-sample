import {Schema, model} from 'mongoose';


const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true },

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const userModel = model('user', userSchema);

export default userModel;
