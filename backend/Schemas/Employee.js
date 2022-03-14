const mongoose = require('mongoose');

// Schema for Employee Collection
const employeeSchema = new mongoose.Schema({
	FirstName: {
		type: String,
		required: true,
	},
	LastName: {
		type: String,
		required: true,
	},
	Email: {
		type: String,
		required: true,
		lowercase: true,
	},
	Mobile: {
		type: Number,
		required: true,
		min: 1000000000,
		validate: {
			validator: function (val) {
				return val.toString().length === 10;
			},
			message: val => `${val.value} has to be 10 digits`,
		},
	},
	Gender: {
		type: String,
		required: true,
	},
	Designation: {
		type: String,
	},
	DateOfJoining: {
		type: Date,
		default: () => Date.now(),
	},
	ReportingManager: {
		type: String,
	},
	Salary: {
		type: Number,
	},
	EmployeeCode: {
		type: Number,
	},
	Location: {
		type: String,
	},
	State: {
		type: String,
	},
	Country: {
		type: String,
	},
	Department: {
		type: String,
	},
	DeletedAt: {
		type: Date,
		default: null,
	},
});

module.exports = mongoose.model('Employee', employeeSchema);
