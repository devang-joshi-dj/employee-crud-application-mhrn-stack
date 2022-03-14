'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');

const InsertDoc = require('./backend/Utils/InsertDoc');
const UpdateDoc = require('./backend/Utils/UpdateDoc');

const init = async () => {
	// initalising server
	const server = Hapi.server({
		port: 5000,
		host: 'localhost',
	});

	// establishing connection with mongo
	mongoose.connect(
		'mongodb://localhost/employee',
		() => console.log('Connected with database'),
		e => console.error(e)
	);

	// insert route
	server.route({
		method: 'POST',
		path: '/api/employee',
		handler: async (request, h) => {
			// accepting the payload and awaiting and returning the database insert response

			const payload = request.payload;
			const status = await InsertDoc(payload);

			return status;
		},
	});

	// update route
	server.route({
		method: 'PUT',
		path: '/api/employee/{id}',
		handler: async (request, h) => {
			// accepting the payload and id and updating the database record

			const payload = request.payload;
			const id = request.params.id;
			const status = await UpdateDoc(id, payload);

			return status;
		},
	});

	await server.start();
	console.log('Server start on - ', server.info.uri);
};

process.on('uncaughtRejection', err => {
	console.log(err);
	process.exit(1);
});

init();
