import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';
import Table from './table';
import FilterBox from './filterBox';
import axios from 'axios';

const Home = () => {
	const [employees, setEmployees] = useState([]);
	const [employeesCount, setEmployeesCount] = useState([]);
	const [showFilterBox, setShowFilterBox] = useState(false);

	useEffect(() => {
		getAllRecords();
	}, []);

	useEffect(() => {
		if (!showFilterBox) getAllRecords();
	}, [showFilterBox]);

	const getAllRecords = async () => {
		const employees = await axios.get('/api/employee');
		const employeesCount = await axios.get('/api/employee/count');
		setEmployees(employees.data);
		setEmployeesCount(employeesCount.data);
	};

	return (
		<div class={style.home}>
			{showFilterBox && (
				<FilterBox setEmployees={setEmployees} setEmployeesCount={setEmployeesCount} />
			)}
			<Table
				employeesCount={employeesCount}
				getAllRecords={getAllRecords}
				employees={employees}
				setShowFilterBox={setShowFilterBox}
			/>
		</div>
	);
};

export default Home;
