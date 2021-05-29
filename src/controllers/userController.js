import User from '../models/User';

export const getJoin = (req, res) => {
  res.render('join', { pagetitle: 'Join' });
};
export const postJoin = async (req, res) => {
  const { username, email, password, password2, name, location } = req.body;
  const pageTitle = 'join';
  const exists = User.exists({ $or: [{ username }, { email }] });
  if (password !== password2) {
    return res.status(400).render('join', {
      pageTitle,
      errorMessage: 'The password confirmation does not match.'
    });
  }
  if (exists) {
    return res.status(400).render('join', {
      pageTitle,
      errorMessage: 'This email or username is duplicated'
    });
  }
  try {
    await User.create({
      username,
      email,
      password,
      name,
      location
    });
    return res.redirect('/login');
  } catch (error) {
    return res
      .status(400)
      .render('join', { pageTitle, errorMessage: error._message });
  }
};
export const getLogin = (req, res) =>
  res.render('login', { pageTitle: 'Login' });

export const postLogin = (req, res) => {
  const { username, password } = req.body;
  const exists = User.exists({ username });
  const pageTitle = 'Login';
  if (!exists) {
    return res.status(400).render('/login', {
      pageTitle,
      errorMessage: 'An account with this username does not exists'
    });
  }
  return res.end();
};

export const edit = (req, res) => res.send('Edit user');
export const remove = (req, res) => res.send('Remove user');
export const logout = (req, res) => res.send('Logout');
export const see = (req, res) => res.send('See user');
