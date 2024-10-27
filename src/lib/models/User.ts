import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  image: { type: String },
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
});

export default mongoose.models.User || mongoose.model('User', userSchema);
