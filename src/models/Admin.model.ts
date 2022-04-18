import mongoose from 'mongoose';

// creat Admin schema
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: String
});

export const Admin_model = mongoose.model('admins', schema);
// generate admin type as Admin interface
export interface Admin {
  _id?: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: string;
}
