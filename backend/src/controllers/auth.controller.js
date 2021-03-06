const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { signUpErrors, signInErrors } = require("../utils/errors.utils");

const maxAge = "1h";

const createToken = (id, pseudo, typeUser) => {
  return jwt.sign({ id: id, pseudo: pseudo, typeUser: typeUser }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.signUp = async (req, res) => {
  const { pseudo, email, password, typeUser } = req.body;

  try {
    // const user = await UserModel.create(new UserModel(req.body));
    //res.status(201).json({ user: user._id});
    const user = await UserModel.create({ pseudo, email, password, typeUser });
    const id = user._id;
    console.log(user)
    res
      .status(201)
      .json({ token: "Bearer " + createToken(id, user.pseudo, user.typeUser) });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors });
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    //res.cookie('jwt', token, { httpOnly: true, maxAge});
    const id = user._id;
    res
      .status(200)
      .json({  token: "Bearer " + createToken(id, user.pseudo, user.typeUser) });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
