import { h } from 'preact';
import style from './style.css';
import optionIcon from '../../../../assets/home-icons/option.png';
import { getDateStr } from '../../../../utils/formatDate';

const HEADERS = [
	'First Name',
	'Last Name',
	'Email',
	'Mobile',
	'Gender',
	'Designation',
	'Date Of Joining',
	'Reporting Manager',
	'Salary',
	'Employee Code',
	'Location',
	'State',
	'Country',
	'Department',
	'',
];

const TableBody = ({ employees }) => (
	<div class={style.tableContainer}>
		<table id={style.employees}>
			<tr>
				{HEADERS.map(header => (
					<th>{header}</th>
				))}
			</tr>
			{employees.map(
				({
					_id,
					FirstName,
					LastName,
					Email,
					Mobile,
					Gender,
					Designation,
					DateOfJoining,
					ReportingManager,
					Salary,
					EmployeeCode,
					Location,
					State,
					Country,
					Department,
					DeletedAt,
				}) => {
					const StrDate = getDateStr(DateOfJoining);
					const employee = {
						FirstName,
						LastName,
						Email,
						Mobile,
						Gender,
						Designation,
						StrDate,
						ReportingManager,
						Salary,
						EmployeeCode,
						Location,
						State,
						Country,
						Department,
					};

					return (
						<tr>
							{Object.keys(employee).map(key => (
								<td>{employee[key]}</td>
							))}
							<td>
								<img class={style.img} src={optionIcon} alt="option" />
							</td>
						</tr>
					);
				}
			)}
		</table>
	</div>
);

export default TableBody;
