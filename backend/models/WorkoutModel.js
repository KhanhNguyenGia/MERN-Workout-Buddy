const mongoose = require('mongoose');

// Schema defines structure of document
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		reps: {
			type: Number,
			required: true,
		},
		load: {
			type: Number,
			required: true,
		},
		user_id: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

// Models applied the schema to the DB
module.exports = mongoose.model('Workout', workoutSchema);
