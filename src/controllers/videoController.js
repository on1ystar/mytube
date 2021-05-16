/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import Video from '../models/Video';

export const home = async (req, res) => {
  try {
    const videos = await Video.find();
    console.warn(videos);
    return res.render('home', { pageTitle: 'Home', videos });
  } catch (err) {
    console.warn('Video.find error: ', err);
    return res.status(404).send('<h1>Not Found</h1>');
  }
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render('watch', { pageTitle: `Whatching ` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render('videoEdit', { pageTitle: `Edit ` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
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
      hashtags: hashtags
        .split(',')
        .map(word =>
          word.trim()[0] === '#' ? `${word.trim()}` : `#${word.trim()}`
        )
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
