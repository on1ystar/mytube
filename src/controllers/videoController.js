/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

export const trending = (req, res) => {
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
  res.render('home', { pageTitle: 'home', videos });
};
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
