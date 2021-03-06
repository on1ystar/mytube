import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
  email: { type: String, required: true, trim: true, unique: true },
  username: { type: String, required: true, trim: true, unique: true },
  password: String,
  avatarUrl: String,
  socialOnly: Boolean,
  name: { type: String, required: true, trim: true },
  location: String
});

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model('User', userSchema);
export default User;
