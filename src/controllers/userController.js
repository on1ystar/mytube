import bcrypt from 'bcrypt';
import fetch from 'node-fetch';
import User from '../models/User';

export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' });
};
export const postJoin = async (req, res) => {
  const { username, email, password, password2, name, location } = req.body;
  const pageTitle = 'join';
  const exists = await User.exists({ $or: [{ username }, { email }] });
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

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const pageTitle = 'Login';
  if (!user) {
    return res.status(400).render('/login', {
      pageTitle,
      errorMessage: 'An account with this username does not exists'
    });
  }
  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    return res.status(400).render('/login', {
      pageTitle,
      errorMessage: 'Invalid password'
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect('/');
};
export const requestGithubLogin = (req, res) => {
  const baseUrl = 'https://github.com/login/oauth/authorize';
  const config = {
    client_id: process.env.GH_CLIENT_ID,
    scope: 'read:user user:email',
    allow_signup: 'false'
  };
  const params = new URLSearchParams(config).toString();
  const requestUrl = `${baseUrl}?${params}`;
  return res.redirect(requestUrl);
};
export const callbackGithubLogin = async (req, res) => {
  const baseUrl = 'https://github.com/login/oauth/access_token';
  const config = {
    client_id: process.env.GH_CLIENT_ID,
    client_secret: process.env.GH_CLIENT_SECRET,
    code: req.query.code
  };
  const params = new URLSearchParams(config).toString();
  const requestUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(requestUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      }
    })
  ).json();
  console.log(tokenRequest);
  if ('access_token' in tokenRequest) {
    const { access_token } = tokenRequest;
    const userRequest = await (
      await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `token ${access_token}`
        }
      })
    ).json();
    console.log(userRequest);
  } else {
    return res.redirect('/login');
  }
};

export const edit = (req, res) => res.send('Edit user');
export const remove = (req, res) => res.send('Remove user');
export const logout = (req, res) => res.send('Logout');
export const see = (req, res) => res.send('See user');
