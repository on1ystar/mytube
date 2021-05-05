/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

export const trending = (req, res) => res.render('home', { pageTitle: 'home' });
export const search = (req, res) => res.sned('Search ');
export const upload = (req, res) => res.send('Upload Video');
export const see = (req, res) => res.render('watch');
export const edit = (req, res) => {
  console.warn(req.params);
  res.send('Edit video !');
};
export const deleteVideo = (req, res) => {
  console.warn(req.params);
  res.send('Delete video !');
};
