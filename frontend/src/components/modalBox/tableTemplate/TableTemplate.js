import { h } from 'preact';
import style from './style.css';
import AlertTypo from '../../Typo/AlertTypo';

const TableTemplate = ({ recordData, errors, handleChange }) => {
	return (
		<>
			<table class={style.table}>
				<tr>
					<th>Label</th>
					<th>Value</th>
				</tr>
				<tr>
					<td>First Name</td>
					<td>
						<input
							type="text"
							name="firstName"
							value={recordData.FirstName}
							onInput={e => handleChange(e, 'FirstName')}
						/>
					</td>
				</tr>
				{errors.firstName && (
					<tr>
						<td colspan="2">
							<AlertTypo>{errors.firstName}</AlertTypo>
						</td>
					</tr>
				)}
				<tr>
					<td>Last Name</td>
					<td>
						<input
							type="text"
							name="lastName"
							value={recordData.LastName}
							onInput={e => handleChange(e, 'LastName')}
						/>
					</td>
				</tr>
				{errors.lastName && (
					<tr>
						<td colspan="2">
							<AlertTypo>{errors.lastName}</AlertTypo>
						</td>
					</tr>
				)}
				<tr>
					<td>Email</td>
					<td>
						<input
							type="email"
							name="Email"
							value={recordData.Email}
							onInput={e => handleChange(e, 'Email')}
						/>
					</td>
				</tr>
				{errors.email && (
					<tr>
						<td colspan="2">
							<AlertTypo>{errors.email}</AlertTypo>
						</td>
					</tr>
				)}
				<tr>
					<td>Mobile</td>
					<td>
						<input
							type="text"
							name="mobile"
							value={recordData.Mobile}
							onInput={e => handleChange(e, 'Mobile')}
						/>
					</td>
				</tr>
				{errors.mobile && (
					<tr>
						<td colspan="2">
							<AlertTypo>{errors.mobile}</AlertTypo>
						</td>
					</tr>
				)}
				<tr>
					<td>Gender</td>
					<td>
						<input
							type="text"
							name="gender"
							value={recordData.Gender}
							onInput={e => handleChange(e, 'Gender')}
						/>
					</td>
				</tr>
				{errors.gender && (
					<tr>
						<td colspan="2">
							<AlertTypo>{errors.gender}</AlertTypo>
						</td>
					</tr>
				)}
				<tr>
					<td>Designation</td>
					<td>
						<input
							type="text"
							name="designation"
							value={recordData.Designation}
							onInput={e => handleChange(e, 'Designation')}
						/>
					</td>
				</tr>
				<tr>
					<td>Reporting Manager</td>
					<td>
						<input
							type="text"
							name="reportingManager"
							value={recordData.ReportingManager}
							onInput={e => handleChange(e, 'ReportingManager')}
						/>
					</td>
				</tr>
				<tr>
					<td>Salary (in Rs)</td>
					<td>
						<input
							type="number"
							name="salary"
							value={recordData.Salary}
							onInput={e => handleChange(e, 'Salary')}
						/>
					</td>
				</tr>
				{errors.salary && (
					<tr>
						<td colspan="2">
							<AlertTypo>{errors.salary}</AlertTypo>
						</td>
					</tr>
				)}
				<tr>
					<td>Employee Code</td>
					<td>
						<input
							type="number"
							name="employeeCode"
							value={recordData.EmployeeCode}
							onInput={e => handleChange(e, 'EmployeeCode')}
						/>
					</td>
				</tr>
				{errors.employeeCode && (
					<tr>
						<td colspan="2">
							<AlertTypo>{errors.employeeCode}</AlertTypo>
						</td>
					</tr>
				)}
				<tr>
					<td>Location</td>
					<td>
						<input
							type="text"
							name="location"
							value={recordData.Location}
							onInput={e => handleChange(e, 'Location')}
						/>
					</td>
				</tr>
				<tr>
					<td>State</td>
					<td>
						<input
							type="text"
							name="state"
							value={recordData.State}
							onInput={e => handleChange(e, 'State')}
						/>
					</td>
				</tr>
				<tr>
					<td>Country</td>
					<td>
						<input
							type="text"
							name="country"
							value={recordData.Country}
							onInput={e => handleChange(e, 'Country')}
						/>
					</td>
				</tr>
				<tr>
					<td>Department</td>
					<td>
						<input
							type="text"
							name="department"
							value={recordData.Department}
							onInput={e => handleChange(e, 'Department')}
						/>
					</td>
				</tr>
			</table>
		</>
	);
};

export default TableTemplate;
