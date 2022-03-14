const Employee = require('../Schemas/Employee');

async function UpdateDoc(id, payload) {
	// function to accept the payload and id and find the employee and update the record in database

	try {
		const employee = await Employee.updateOne({ _id: id }, { $set: payload });
		return employee;
	} catch (err) {
		return err.message;
	}
}

module.exports = UpdateDoc;
