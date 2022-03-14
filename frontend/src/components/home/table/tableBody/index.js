import { h } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import style from './style.css';
import optionIcon from '../../../../assets/home-icons/option.png';
import { getDateStr } from '../../../../utils/formatDate';
import axios from 'axios';

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

const Options = ({ id, deleteStat, getAllRecords }) => {
	const setDeleteStatus = (id, status) => {
		axios.put(`/api/employee/${id}/${status}`).then(() => {
			getAllRecords();
		});
	};

	return (
		<td class={style.popoverWrapper}>
			<img class={style.img} src={optionIcon} alt="option" />
			<div class={style.popoverContent}>
				<button class={style.popoverButton}>Edit</button>
				<button
					class={style.popoverButton}
					onClick={() => {
						const status = deleteStat === null ? 'Deactivate' : 'Activate';
						setDeleteStatus(id, status);
					}}
				>
					{deleteStat === null ? 'Deactivate' : 'Activate'}
				</button>
			</div>
		</td>
	);
};

const TableBody = ({ employees, getAllRecords }) => (
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
						<tr key={_id} class={DeletedAt ? style.deleted : null}>
							{Object.keys(employee).map(key => (
								<td key={key}>{employee[key]}</td>
							))}
							<Options id={_id} deleteStat={DeletedAt} getAllRecords={getAllRecords} />
						</tr>
					);
				}
			)}
		</table>
	</div>
);

export default TableBody;
