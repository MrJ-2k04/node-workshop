/* Installation Command */
// npm install express mongoose
// OR
// npm i express mongoose


const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/workshop').then(() => {
  const UserSchema = new mongoose.Schema({
    name: String,
    email: String
  });
  const User = mongoose.model('User', UserSchema);

  app.post('/user', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  });

  app.get('/user', async (req, res) => {
    const users = await User.find();
    res.send(users);
  });

  app.delete('/user/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted successfully!");
  })

  app.listen(8000, () => console.log("Mongo API at http://localhost:8000"));
}).catch(err => console.log(err));

