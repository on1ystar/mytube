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
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 }
  }
});

videoSchema.static('formatHashtags', hashtags =>
  hashtags
    .split(',')
    .map(word =>
      word.trim().startsWith('#') ? word.trim() : `#${word.trim()}`
    )
);

const Video = mongoose.model('Video', videoSchema);

export default Video;
