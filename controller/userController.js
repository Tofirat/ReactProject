import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const { name, email ,address} = req.body;

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Create new user
    const newUser = new User({ name, email,address });
    const savedData = await newUser.save();

    // Send response
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
