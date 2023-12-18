const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userData = require('./model/connection'); // Import the User model
const User = require('./model/connection');
const ContactUsData = require('./model/connection2')
const Product=require('./model/apidata')


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/bakery", { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

  app.post('/submit', cors(), async (req, res) => {
    try {
      const contactData = new ContactUsData(req.body);
      await contactData.save();
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error('Error saving contact data:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
app.post('/register', (req, res) => {
  // Use the User model to create a new user
  userData.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
});


app.post('/Login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userData.findOne({ email: email });

        if (user) {
            if (user.password === password) {
                res.json({ success: true, message: 'Login successful' });
            } else {
                res.json({ success: false, message: 'Incorrect password' });
            }
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        console.error('Login failed:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
})


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
