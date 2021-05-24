import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    minLength: 2,
    maxLength: 30
  },
  description: { type: String, required: true, trim: true, maxLength: 100 },
  createdAt: { type: Date, default: Date.now },
  hashtags: [String],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 }
  }
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
