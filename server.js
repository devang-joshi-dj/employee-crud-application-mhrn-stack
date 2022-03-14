'use strict';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');

const InsertDoc = require('./backend/Utils/InsertDoc');
const UpdateDoc = require('./backend/Utils/UpdateDoc');
const GetDocs = require('./backend/Utils/GetDocs');
const GetDocsCount = require('./backend/Utils/GetDocsCount');

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

	// get all record route
	server.route({
		method: 'GET',
		path: '/api/employee',
		handler: async (request, h) => {
			// accepting the queries (if exists) and awaiting and returning the all the records (based on queries if exists) in the collection

			let queries = request.query;
			const allowedQueries = [
				'firstname',
				'lastname',
				'department',
				'email',
				'gender',
				'designation',
				'reportingmanager',
				'location',
			];
			Object.keys(queries).map(key => {
				if (!allowedQueries.includes(key.toLowerCase())) {
					delete queries[key];
				}
			});

			const status = await GetDocs(queries);

			return status;
		},
	});

	// get all record count route
	server.route({
		method: 'GET',
		path: '/api/employee/count',
		handler: async (request, h) => {
			// accepting the queries (if exists) and awaiting and returning the all the records count (based on queries if exists) in the collection

			let queries = request.query;
			const allowedQueries = [
				'firstname',
				'lastname',
				'department',
				'email',
				'gender',
				'designation',
				'reportingmanager',
				'location',
			];
			Object.keys(queries).map(key => {
				if (!allowedQueries.includes(key.toLowerCase())) {
					delete queries[key];
				}
			});

			const status = await GetDocsCount(queries);

			return status;
		},
	});

	// insert route
	server.route({
		method: 'POST',
		path: '/api/employee',
		handler: async (request, h) => {
			// accepting the payload and awaiting and returning the collection insert response

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
			// accepting the payload and id and updating the collection record

			const payload = request.payload;
			const id = request.params.id;
			const status = await UpdateDoc(id, payload);

			return status;
		},
	});

	// update delete status route
	server.route({
		method: 'PUT',
		path: '/api/employee/{id}/{action}',
		handler: async (request, h) => {
			// accepting the params and updating the delete status

			const id = request.params.id;
			const action = request.params.action;
			const acceptedAction = ['activate', 'deactivate'];
			if (acceptedAction.includes(action.toLowerCase())) {
				const payload = { DeletedAt: action === 'deactivate' ? Date.now() : null };
				const status = await UpdateDoc(id, payload);
				return status;
			} else {
				return 'Invalid Action';
			}
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
