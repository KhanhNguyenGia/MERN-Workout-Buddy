require('dotenv').config(); // Import and invoke dotenv config()
// Imports
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/users');

// create an express app
const app = express();

// middle wares
app.use(express.json());

// next to move the middleware to the next one
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// connect to mongoDB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// listen on port
		app.listen(process.env.PORT, () => {
			console.log('Connected to Mongoose & Listening on port ' + process.env.PORT);
		});
	})
	.catch((error) => {
		console.log(error);
	});
