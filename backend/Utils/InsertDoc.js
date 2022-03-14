const Employee = require('../Schemas/Employee');

async function InsertDoc(payload) {
	// function to accept the payload and create a user object and store in database

	const employee = new Employee({
		FirstName: payload.FirstName,
		LastName: payload.LastName,
		Email: payload.Email,
		Mobile: payload.Mobile,
		Gender: payload.Gender,
		Designation: payload.Designation,
		DateOfJoining: payload.DateOfJoining,
		ReportingManager: payload.ReportingManager,
		Salary: payload.Salary,
		Employeecode: payload.Employeecode,
		Location: payload.Location,
		State: payload.State,
		Country: payload.Country,
		Department: payload.Department,
		DeletedAt: payload.DeletedAt,
	});
	const status = await employee
		.save()
		.then(() => {
			return 'Successfully Inserted';
		})
		.catch(err => {
			return err.message;
		});
	return status;
}

module.exports = InsertDoc;
