import { h } from 'preact';
import style from './style.css';
import { useEffect, useState } from 'preact/hooks';
import axios from 'axios';
import TableHeading from './tableHeading';
import TableBody from './tableBody';

const Table = () => {
	const [employees, setEmployees] = useState([]);
	const [employeesCount, setEmployeesCount] = useState([]);

	useEffect(() => {
		getAllRecords();
	}, []);

	const getAllRecords = async () => {
		const employees = await axios.get('/api/employee');
		const employeesCount = await axios.get('/api/employee/count');
		setEmployees(employees.data);
		setEmployeesCount(employeesCount.data);
	};

	return (
		<div class={style.container}>
			<TableHeading employeesCount={employeesCount} />
			<TableBody employees={employees} getAllRecords={getAllRecords} />
		</div>
	);
};

export default Table;
