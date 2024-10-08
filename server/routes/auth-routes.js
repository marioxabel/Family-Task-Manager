import { Router } from 'express'; // Ensure you import Router
import Parent from '../models/parent.js';  // Import the Parent model
import Child from '../models/child.js';    // Import the Child model
import jwt from 'jsonwebtoken';  // Import the JSON Web Token library
import bcrypt from 'bcrypt';  // Import the bcrypt library for password hashing

// Login function to authenticate a user
export const login = async (req, res) => {
  console.log("Login route hit"); // Add this line for debugging
  const { email, password, type } = req.body;  // Extract email, password, and type from request body
  console.log("Received credentials:", { email, password, type }); // Debugging line

  let user;

  // Check the user type and find the user in the corresponding table
  if (type === 'parent') {
    user = await Parent.findOne({ where: { email } });
  } else if (type === 'child') {
    user = await Child.findOne({ where: { email } });
  } else {
    return res.status(400).json({ message: 'Invalid user type' }); // Handle invalid user type
  }

  // If user is not found, send an authentication failed response
  if (!user) {
    console.log("User not found"); // Debugging line
    return res.status(401).json({ message: 'Authentication failed' });
  }

  console.log("User found:", user); // Debugging line

  // Compare the provided password with the stored hashed password
  const passwordIsValid = await bcrypt.compare(password, user.password);
  
  // If password is invalid, send an authentication failed response
  if (!passwordIsValid) {
    console.log("Invalid password"); // Debugging line

    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY || '';

  // Generate a JWT token for the authenticated user
  const token = jwt.sign({ email, type }, secretKey, { expiresIn: '1h' });

  return res.json({ token });  // Send the token as a JSON response
};

//Registration function to register a user (parent or child)
export const register = async (req, res) => {
  console.log("Register route hit"); //Debugging line
  const {firstName, lastName, email, password, userType, parentKey} = req.body;

  try {
    //Check if the user alredy exists (in both parent and child tables)
    let existingUser = await Parent.findOne({ where: { email }});
    if (!existingUser) {
      existingUser = await Child.findOne({ where: {email} });
    }

    if (existingUser) {
      return res.status(400).json({message: 'User already exists'});
    }

    //Hast the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Based on the userType, create a parent or child user
    let newUser;
    if (userType === 'parent') {
      newUser = await Parent.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
    } else if (userType === 'child') {
      newUser = await Child.create({
        firstName,
        lastName,
        email,
        password: hashedPassword, 
        parentKey //Include parentKey for child registration
      });
    } else {
      return res.status(400).json({ message: 'Invalid user type'});
    }

    //Generate a JWT token after successful registration
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ email, userType }, secretKey, { expiresIn: '1h'});

    //Respond with the new user and token
    return res.status(201).json({
      message: 'User registered successfully',
      token, //Send the JWT token
      user: {
        id: newUser.id, 
        email: newUser.email,
        userType: userType
      }
    });

  } catch (error) {
    console.error('Error during registration', error);
    return res.status(500).json({message: 'Server error during registration'});
  }
};

// Create a new router instance
const router = Router();

// POST /login - Login a user
router.post('/login', login);  // Define the login route

// POST /register - Register a user (parent or child)
router.post('/register', register);

router.get('/test', (req, res) => {
  console.log("Test route hit"); // Add this line for debugging
  res.send('Authorization route is working!');
});


export default router;  // Export the router instance
