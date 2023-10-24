const User = require("../models/User");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    // Validate if user exists in our database
    const user = await User.findOne({ email });

    if (user && password == user.password) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // Save user token
      user.token = token;

      res.cookie("authToken", token, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 2 * 60 * 60 * 1000,
      });

      // Return user
      return res.status(200).json(user);
    }

    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const logoutUser = async (req, res) => {
  try {
    // Clear authToken cookie
    res.clearCookie("authToken", { httpOnly: true, secure: true });

    const userId = req.user_id; // Assuming you have the user's ID stored in the request object after authentication middleware
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Expire user's token by setting it to null
    user.token = null;
    await user.save();

    return res.status(200).send("Logout successful");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const registerUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Create a new user
    const newUser = new User({ first_name, last_name, email, password });
    await newUser.save();

    // Create token
    const token = jwt.sign(
      { user_id: newUser._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    // Set authToken cookie
    res.cookie("authToken", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 2 * 60 * 60 * 1000,
    });

    return res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = { loginUser, logoutUser, registerUser };
