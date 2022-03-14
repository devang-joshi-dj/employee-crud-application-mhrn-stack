const Employee = require('../Schemas/Employee');

async function GetDocsCount(queries) {
	// function to accept the queries and returning all the records in collection

	try {
		const status = await Employee.find(queries).count();
		return status;
	} catch (err) {
		return err.message;
	}
}

module.exports = GetDocsCount;
