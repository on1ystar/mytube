/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import Video from '../models/Video';

export const home = async (req, res) => {
  try {
    const videos = await Video.find();
    console.log(videos);
    return res.render('home', { pageTitle: 'Home', videos: {} });
  } catch (err) {
    console.log('Video.find error: '.err);
    return res.end();
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
export const postUpload = (req, res) => {
  const { title } = req.body;

  return res.redirect('/');
};
