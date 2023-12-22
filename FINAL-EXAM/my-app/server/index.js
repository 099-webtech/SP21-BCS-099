const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Mydata = require('./model/myapidata');

const userData = require('./model/connection'); // Import the User model
const User = require('./model/connection');
const ContactUsData = require('./model/connection2')
const Product=require('./model/apidata')
const CalculatorResult=require('./model/calculatorResultModel')


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

app.post('/createuser', (req, res) => {
  const { Name, Email, Age } = req.body;

  Mydata.create({ Name, Email, Age })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.get('/', (req, res) => {
  Mydata.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.get('/getuser/:id', (req, res) => {
  const userId = req.params.id;
  Mydata.findById(userId)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
});


app.patch('/updateuser/:id', (req, res) => {
  const userId = req.params.id;
  const { Name, Email, Age } = req.body;

  console.log("Received data:", { userId, Name, Email, Age });

  Mydata.findByIdAndUpdate(userId, { Name, Email, Age }, { new: true })
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.status(500).json({ error: err.message }));
});
app.delete('/deleteuser/:id', (req, res) => {
  const userId = req.params.id;

  Mydata.findByIdAndDelete(userId)
    .then(() => res.json({ message: 'User deleted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
});


app.post('/calculate', cors(), async (req, res) => {
  try {
    const { operand1, operand2, operation } = req.body;

    // Perform calculation based on the operation
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(operand1) + parseFloat(operand2);
        break;
      case '-':
        result = parseFloat(operand1) - parseFloat(operand2);
        break;
      case '*':
        result = parseFloat(operand1) * parseFloat(operand2);
        break;
      case '/':
        result = parseFloat(operand1) / parseFloat(operand2);
        break;
      default:
        result = null;
    }

    // Save the calculation result in the database
    const calculationResult = new CalculatorResult({ operand1, operand2, operation, result });
    await calculationResult.save();

    // Set the result array in cookies
    res.cookie('calculatorResult', JSON.stringify({ operand1, operand2, operation, result }));


    res.status(200).json({ result });
  } catch (error) {
    console.error('Error processing calculator form data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/calculate/latest', async (req, res) => {
  try {
    const latestResult = await CalculatorResult.findOne({}, {}, { sort: { 'createdAt' : -1 } });
    res.status(200).json(latestResult);
    
  } catch (error) {
    console.error('Error fetching latest result:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
