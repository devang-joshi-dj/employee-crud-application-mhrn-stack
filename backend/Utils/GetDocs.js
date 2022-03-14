const Employee = require('../Schemas/Employee');

async function GetDocs(queries) {
	// function to accept the queries and returning all the documents in collection

	try {
		const status = await Employee.find(queries);
		return status;
	} catch (err) {
		return err.message;
	}
}

module.exports = GetDocs;
