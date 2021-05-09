/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const videos = [
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
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) =>
  res.render('upload', { pageTitle: 'Upload Video' });
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 4,
    createdAt: '2 minutes ago',
    views: 0,
    id: videos.length + 1
  };
  videos.push(newVideo);

  return res.redirect('/');
};
