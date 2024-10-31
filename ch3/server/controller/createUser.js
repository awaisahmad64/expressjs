import User from '../model/user.js';
const createUser = async (req, res) => {
  try {
    // Get user from the body request
    console.log(req.body);
    const { name, password, role } = req.body;
    // Create a new user instance
    const newUser = new User({
      name,
      password,
      role,
    });
    // save a new to the database
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json({ message: 'Error saving data' });
  }
};
const showUser = async (req, res) => {
  try {
    const getUsers = await User.find({});
    console.log(getUsers);
    res.status(201).json(getUsers);
  } catch (err) {
    console.log(err);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const getUsers = await User.findByIdAndDelete(id);
    console.log(getUsers);
    res.status(200).json({ message: 'User deleted Successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'User deleting error' });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updateUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!updateUser) {
      return res.status(404).json({ message: 'User not Found.' });
    }
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user' });
  }
};
export { createUser, showUser, deleteUser, updateUser };
