/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import Video from '../models/Video';

export const home = async (req, res) => {
  try {
    const videos = await Video.find();
    console.warn(videos);
    return res.render('home', { pageTitle: 'Home', videos });
  } catch (err) {
    console.warn('Video.find error: ', err);
    return res.render('404', { pageTitle: 'Video Not Found' });
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render('404', { pageTitle: 'Video Not Found' });
  }
  return res.render('watch', { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render('404', { pageTitle: 'Video Not Found' });
  }
  return res.render('videoEdit', { pageTitle: `Edit, ${video.title} `, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render('404', { pageTitle: 'Video Not Found' });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: hashtags
      .split(',')
      .map(word =>
        word.trim()[0] === '#' ? `${word.trim()}` : `#${word.trim()}`
      )
  });
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) =>
  res.render('upload', { pageTitle: 'Upload Video' });

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags
    });
    return res.redirect('/');
  } catch (err) {
    console.warn('Video.create error: ', err);
    return res.status(404).render('upload', {
      pageTitle: 'Upload Video',
      errprMessage: err._message
    });
  }
};
