const Employee = require('../Schemas/Employee');

async function UpdateDoc(id, payload) {
	// function to accept the payload and create a user object and store in database

	// const employee = new Employee({
	// 	FirstName: payload.FirstName,
	// 	LastName: payload.LastName,
	// 	Email: payload.Email,
	// 	Mobile: payload.Mobile,
	// 	Gender: payload.Gender,
	// 	Designation: payload.Designation,
	// 	DateOfJoining: payload.DateOfJoining,
	// 	ReportingManager: payload.ReportingManager,
	// 	Salary: payload.Salary,
	// 	Employeecode: payload.Employeecode,
	// 	Location: payload.Location,
	// 	State: payload.State,
	// 	Country: payload.Country,
	// 	Department: payload.Department,
	// 	DeletedAt: payload.DeletedAt,
	// });

	try {
		const employee = await Employee.updateOne({ _id: id }, { $set: payload });
		return employee;
	} catch (err) {
		return err.message;
	}
}

module.exports = UpdateDoc;
