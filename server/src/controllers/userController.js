const userShema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new userShema({
    name: name,
    email: email,
    password: hashedPassword,
  });

  await user.save();
  res.status(200).json({
    message: "Successfully user registered",
    status: "success",
    data: user,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userShema.findOne({ email });
  if (!user) {
    res.status(400).json("user is not available");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).json("Invalid Password");
  }

  const token = jwt.sign(
    {
      name: user.name,
    },
    "secretkey"
  );

  res.status(200).json({
    message: "User successfully login",
    status: "success",
    token: token,
  });
};

module.exports = {
  registerUser,
  loginUser,
};
