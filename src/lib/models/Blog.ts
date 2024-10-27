import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  thumbnail: { type: String },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now },
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  views: { type: Number, default: 0 },
  content: { type: String }
});

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema);
