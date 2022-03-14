import { h } from 'preact';
import style from './style.css';
import { getDateStr } from '../../../../utils/formatDate';
import TABLE_HEADERS from './TABLE_HEADERS';
import Options from './Options';

const TableBody = ({ employees, getAllRecords }) => (
	<div class={style.tableContainer}>
		<table id={style.employees}>
			<tr>
				{TABLE_HEADERS.map(header => (
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
							<Options
								id={_id}
								employee={employee}
								deleteStat={DeletedAt}
								getAllRecords={getAllRecords}
							/>
						</tr>
					);
				}
			)}
		</table>
	</div>
);

export default TableBody;
