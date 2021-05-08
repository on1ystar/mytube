/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

let videos = [
  {
    title: 'First video',
    rating: 5,
    comments: 4,
    createdAt: '2 minutes ago',
    views: 100,
    id: 1
  },
  {
    title: 'Second video',
    rating: 5,
    comments: 4,
    createdAt: '2 minutes ago',
    views: 100,
    id: 2
  },
  {
    title: 'Third video',
    rating: 5,
    comments: 4,
    createdAt: '2 minutes ago',
    views: 100,
    id: 3
  }
];

export const trending = (req, res) => {
  res.render('home', { pageTitle: 'Home', videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('watch', { pageTitle: `Whatching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('videoEdit', { pageTitle: `Edit ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.sned('Search ');
export const upload = (req, res) => res.send('Upload Video');
export const deleteVideo = (req, res) => {
  console.warn(req.params);
  res.send('Delete video !');
};
