// Import necessary modules and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

// Create an instance of the express application
const app = express();

// Use middleware to parse JSON data in request bodies
app.use(bodyParser.json());

// Use middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Use middleware to set security-related HTTP headers
app.use(helmet());
