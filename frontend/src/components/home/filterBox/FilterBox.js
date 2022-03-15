import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';
import axios from 'axios';

const FilterBox = ({ setEmployees, setEmployeesCount }) => {
	const recordDefaultValue = {
		FirstName: '',
		LastName: '',
		Email: '',
		Gender: '',
		Designation: '',
		ReportingManager: '',
		Location: '',
		Department: '',
	};

	const [filterData, setFilterData] = useState(recordDefaultValue);

	const getQueryRecords = async () => {
		let queries = '';
		const getQueryDomain = () => {
			Object.keys(filterData).map(key => {
				if (filterData[key]) {
					if (queries) queries += `&&${key}=${filterData[key]}`;
					else queries += `${key}=${filterData[key]}`;
				}
			});
		};
		getQueryDomain();

		const queryEmployees = await axios.get(`/api/employee?${queries}`);
		const queryEmployeesCount = await axios.get(`/api/employee/count?${queries}`);
		setEmployees(queryEmployees.data);
		setEmployeesCount(queryEmployeesCount.data);
	};

	useEffect(() => {
		getQueryRecords();
	}, [filterData]);

	const handleChange = (e, param) => {
		if (e)
			setFilterData(prevState => {
				var newState = {};
				newState[param] = e.target ? e.target.value : e;
				return { ...prevState, ...newState };
			});
	};

	return (
		<div class={style.filterBox}>
			<h2>Filter Box</h2>
			<div class={style.filterGrid}>
				<div>
					<div>First Name</div>
					<div>
						<input
							type="text"
							name="firstName"
							value={filterData.FirstName}
							onInput={e => handleChange(e, 'FirstName')}
						/>
					</div>
				</div>
				<div>
					<div>Last Name</div>
					<input
						type="text"
						name="lastName"
						value={filterData.LastName}
						onInput={e => handleChange(e, 'LastName')}
					/>
				</div>
				<div>
					<div>Email</div>

					<input
						type="text"
						name="email"
						value={filterData.Email}
						onInput={e => handleChange(e, 'Email')}
					/>
				</div>
				<div>
					<div>Gender</div>

					<input
						type="text"
						name="gender"
						value={filterData.Gender}
						onInput={e => handleChange(e, 'Gender')}
					/>
				</div>
				<div>
					<div>Designation</div>

					<input
						type="text"
						name="designation"
						value={filterData.Designation}
						onInput={e => handleChange(e, 'Designation')}
					/>
				</div>
				<div>
					<div>Reporting Manager</div>
					<input
						type="text"
						name="reportingManager"
						value={filterData.ReportingManager}
						onInput={e => handleChange(e, 'ReportingManager')}
					/>
				</div>
				<div>
					<div>Location</div>
					<input
						type="text"
						name="location"
						value={filterData.Location}
						onInput={e => handleChange(e, 'Location')}
					/>
				</div>
				<div>
					<div>Department</div>

					<input
						type="text"
						name="department"
						value={filterData.Department}
						onInput={e => handleChange(e, 'Department')}
					/>
				</div>
			</div>
		</div>
	);
};

export default FilterBox;
